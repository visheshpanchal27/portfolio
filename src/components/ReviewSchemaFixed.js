import { Helmet } from 'react-helmet-async';

const ReviewSchemaFixed = () => {
  const reviewData = {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "CreativeWork",
      "name": "Vishesh Panchal Portfolio",
      "url": "https://vishesh.work.gd"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": "Professional Portfolio Reviewer"
    },
    "reviewBody": "Excellent full-stack developer with strong expertise in MERN stack and AI applications. Delivers high-quality, scalable solutions."
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(reviewData)}
      </script>
    </Helmet>
  );
};

export default ReviewSchemaFixed;