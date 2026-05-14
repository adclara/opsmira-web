import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-title mt-2">Page not found.</h1>
      <p className="mt-4 max-w-md text-[0.9rem] leading-6 text-neutral-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="button-primary">
          Back to Home
        </Link>
        <Link href="/contact" className="button-secondary">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
