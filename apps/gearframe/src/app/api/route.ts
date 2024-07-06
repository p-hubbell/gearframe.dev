import { list } from '@vercel/blob';

export const runtime = 'edge';

export interface BlobStoreData {
  logo?: string;
  designDirection?: string[];
}

export async function GET(request: Request) {
  const data: BlobStoreData = {};
  const { blobs } = await list();
  for (const blob of blobs) {
    if (blob.pathname.includes('assets/gifs/logo/')) {
      data.logo = blob.downloadUrl;
    } else if (blob.downloadUrl.includes('assets/imgs/design-direction/design')) {
      data.designDirection = data.designDirection || [];
      data.designDirection.push(blob.downloadUrl);
    }
  }
  return Response.json({ data });
}
