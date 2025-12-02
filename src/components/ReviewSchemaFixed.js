import { Helmet } from 'react-helmet-async';

const ReviewSchemaFixed = () => {
  const reviewData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "@id": "https://vishesh.work.gd/#organization",
      "name": "Vishesh Panchal - Full Stack Developer",
      "url": "https://vishesh.work.gd/"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    "author": {
      "@type": "Organization",
      "name": "Professional Portfolio"
    },
    "reviewBody": "Excellent full stack developer with strong expertise in MERN stack and AI applications. Delivers high-quality, scalable solutions."
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