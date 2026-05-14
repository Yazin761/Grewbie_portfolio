import { useEffect } from "react";
import {
  defaultDescription,
  defaultTitle,
  jsonLd,
  keywords,
  ogImage,
  siteName,
  siteUrl,
} from "../constants/seo";

const Seo = () => {
  useEffect(() => {
    document.title = defaultTitle;

    const setMeta = (selector, content, attr = "content") => {
      if (!content) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const key = selector.includes("property=") ? "property" : "name";
        const val = selector.match(/"([^"]+)"/)?.[1];
        if (val) el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    setMeta('meta[name="description"]', defaultDescription);
    setMeta('meta[name="keywords"]', keywords);
    setMeta('meta[property="og:title"]', defaultTitle);
    setMeta('meta[property="og:description"]', defaultDescription);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:url"]', siteUrl);
    setMeta('meta[property="og:site_name"]', siteName);
    setMeta('meta[name="twitter:title"]', defaultTitle);
    setMeta('meta[name="twitter:description"]', defaultDescription);
    setMeta('meta[name="twitter:image"]', ogImage);

    let script = document.getElementById("json-ld-graph");
    if (!script) {
      script = document.createElement("script");
      script.id = "json-ld-graph";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return null;
};

export default Seo;
