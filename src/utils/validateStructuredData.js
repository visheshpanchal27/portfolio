// Structured Data Validation Utility
export const validateStructuredData = () => {
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  const results = [];
  
  scripts.forEach((script, index) => {
    try {
      const data = JSON.parse(script.textContent);
      results.push({
        index: index + 1,
        type: data['@type'],
        valid: true,
        data: data
      });
    } catch (error) {
      results.push({
        index: index + 1,
        valid: false,
        error: error.message
      });
    }
  });
  
  return results;
};

// Check for common structured data issues
export const checkStructuredDataIssues = () => {
  const issues = [];
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  
  scripts.forEach((script, index) => {
    try {
      const data = JSON.parse(script.textContent);
      
      // Check Event schema requirements
      if (data['@type'] === 'Event') {
        if (!data.startDate) issues.push(`Event ${index + 1}: Missing startDate`);
        if (!data.location) issues.push(`Event ${index + 1}: Missing location`);
        if (!data.name) issues.push(`Event ${index + 1}: Missing name`);
        if (data.startDate && !data.startDate.includes('T')) {
          issues.push(`Event ${index + 1}: startDate should include time (ISO format)`);
        }
      }
      
      // Check Review schema requirements
      if (data['@type'] === 'Review') {
        if (!data.itemReviewed) issues.push(`Review ${index + 1}: Missing itemReviewed`);
        if (!data.reviewRating) issues.push(`Review ${index + 1}: Missing reviewRating`);
        if (!data.author) issues.push(`Review ${index + 1}: Missing author`);
        if (data.reviewRating && !data.reviewRating.worstRating) {
          issues.push(`Review ${index + 1}: Missing worstRating in reviewRating`);
        }
      }
      
    } catch (error) {
      issues.push(`Script ${index + 1}: Invalid JSON - ${error.message}`);
    }
  });
  
  return issues;
};

// Console helper for debugging
if (typeof window !== 'undefined') {
  window.validateStructuredData = validateStructuredData;
  window.checkStructuredDataIssues = checkStructuredDataIssues;
}