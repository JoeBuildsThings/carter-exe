import Link from "next/link";
import { navigationItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="CARTER.EXE home">
        <span className="brand-mark" aria-hidden="true">
          C<span>.</span>
        </span>
        <span className="brand-name">{siteConfig.name}</span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <a
        className="header-source"
        href={siteConfig.githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        Source code <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
