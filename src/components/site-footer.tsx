import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>{siteConfig.disclaimer}</p>
      <nav className="footer-nav" aria-label="Footer navigation">
        <Link href="/play">Creators</Link>
        <Link href="/support">Laptop support</Link>
        <Link href="/hire">Hire</Link>
        <a href={siteConfig.githubProfileUrl} target="_blank" rel="noreferrer">
          Engineered by JoeBuildsThings <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </footer>
  );
}
