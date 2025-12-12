// Simple i18n utility for text labels
export const t = (key, fallback) => {
  // For now, return fallback text
  // In future, this can be extended to support multiple languages
  return fallback || key;
};

export const labels = {
  name: 'Name',
  email: 'Email',
  message: 'Message',
  send: 'Send Message'
};