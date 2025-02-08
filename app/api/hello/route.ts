import { put } from "@vercel/blob";

export async function GET(request: Request) {
  const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });
  return new Response(url);
}
