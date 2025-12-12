import { Helmet } from 'react-helmet-async';

const OrganizationSchema = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vishesh Panchal",
    "url": "https://vishesh.work.gd",
    "sameAs": [
      "https://github.com/visheshpanchal",
      "https://www.linkedin.com/in/visheshpanchal/"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;