export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response(JSON.stringify({ error: 'URL is required' }), { status: 400 });
  }

  try {
    const start = Date.now();
    const response = await fetch(url);
    const ttfb = Date.now() - start; // Time to First Byte
    const statusCode = response.status;

    // Estimate response size
    let size = null;
    try {
      const clone = response.clone();
      const text = await clone.text();
      size = new Blob([text]).size;
    } catch (e) {
      size = null;
    }

    const status = response.ok ? 'up' : 'down';

    return new Response(
      JSON.stringify({
        url,
        latency: ttfb,
        status,
        statusCode,
        responseSize: size,
        timestamp: new Date().toISOString(),
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        url,
        latency: null,
        status: 'down',
        statusCode: null,
        responseSize: null,
        timestamp: new Date().toISOString(),
      }),
      { status: 200 }
    );
  }
}
