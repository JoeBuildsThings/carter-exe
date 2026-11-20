import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>{siteConfig.disclaimer}</p>
      <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
        Engineered by JoeBuildsThings <span aria-hidden="true">↗</span>
      </a>
    </footer>
  );
}
