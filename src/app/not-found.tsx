import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found section-wrap">
      <p className="eyebrow">404 / OUT OF RANGE</p>
      <h1>This page hasn&apos;t<br />been built yet.</h1>
      <p>The address is valid-looking. The destination is not here.</p>
      <Link className="button button-primary" href="/">
        Return to the project <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
