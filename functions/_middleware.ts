interface PagesContext {
  request: Request;
  next: () => Promise<Response>;
}

export async function onRequest({ request, next }: PagesContext): Promise<Response> {
  const response = await next();
  const hostname = new URL(request.url).hostname;

  if (!hostname.endsWith('.pages.dev')) return response;

  const headers = new Headers(response.headers);
  headers.set('X-Robots-Tag', 'noindex, nofollow');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
