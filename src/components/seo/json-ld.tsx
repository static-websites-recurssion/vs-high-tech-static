/**
 * Renders a JSON-LD block. Server component — the markup is in the static HTML,
 * so crawlers see it without executing any JavaScript.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Schema payloads are authored in-repo, never user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
