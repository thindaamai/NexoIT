import { getSeoRoutes } from "@/lib/seo-routes";

export function GET(request: Request) {
  const host = request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") ?? new URL(request.url).protocol.replace(":", "");
  const origin = host ? `${protocol}://${host}` : new URL(request.url).origin;
  const urls = getSeoRoutes().map((route) => `${origin}${route}`);

  return new Response(`${urls.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
