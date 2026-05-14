/** Central SEO config — update `siteUrl` when deploying to production. */
export const siteUrl =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://grewbie.com";

export const siteName = "GrewBie Tech";
export const legalName = "Grewbie Technologies Pvt Ltd";

export const defaultTitle =
  "GrewBie Tech | AI Agentic Engineering, DemoAgent & Brand Cure";

export const titleTemplate = "%s | GrewBie Tech";

export const defaultDescription =
  "Grewbie Technologies builds AI-powered products and services — DemoAgent for autonomous sales demos on Meet, Zoom & Teams, Brand Cure for AI marketing automation, plus agentic engineering with RAG, fine-tuning, and scalable full-stack systems.";

export const keywords = [
  "Grewbie Technologies",
  "GrewBie Tech",
  "DemoAgent",
  "Brand Cure",
  "AI sales demo automation",
  "agentic engineering",
  "RAG pipelines",
  "LLM fine-tuning",
  "AI agents",
  "full-stack development",
  "Tamil Nadu AI company",
  "Google Meet demo automation",
  "Zoom AI demo",
  "Microsoft Teams sales demo",
].join(", ");

export const ogImage = `${siteUrl}/og-image.svg`;

export const contactEmail = "yogeshwaran@grewbie.com";
export const supportEmail = "support@grewbie.com";
export const phone = "+91 88389 24425";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: legalName,
      alternateName: siteName,
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
      email: supportEmail,
      telephone: phone,
      address: {
        "@type": "PostalAddress",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      sameAs: [siteUrl, "https://grewbie.com"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: defaultDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: defaultTitle,
      description: defaultDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "SoftwareApplication",
      name: "DemoAgent",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://grewbie.com",
      description:
        "AI sales demo automation that joins Google Meet, Zoom, and Microsoft Teams to run personalised autonomous demos.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "Free trial available",
      },
      provider: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      name: "Brand Cure",
      url: "https://grewbie.com",
      description:
        "AI marketing and automation services — ad creatives, landing pages, and sales workflows for startups and SMBs.",
      provider: { "@id": `${siteUrl}/#organization` },
    },
  ],
};
