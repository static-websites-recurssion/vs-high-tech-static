import Head from "next/head";

export function generateStaticParams() {
  return [
    { slug: "education" },
    { slug: "government" },
    { slug: "corporate" },
  ];
}

export default function SectorsSlugPage() {
  const target = "/industries";

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </Head>
      <div className="mx-auto max-w-6xl px-4 py-16 text-center text-muted-foreground">
        Redirecting…
        <div className="mt-4">
          <a className="text-accent underline" href={target}>
            Continue
          </a>
        </div>
      </div>
    </>
  );
}

