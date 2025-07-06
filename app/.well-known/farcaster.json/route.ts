import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  // Redirect to Farcaster hosted manifest
  // Replace 'YOUR_HOSTED_MANIFEST_ID' with the ID you get from Farcaster
  const hostedManifestId = '0197dcdb-60e3-ac6e-6ef2-6a508d09ba22'; // You'll get this from the Farcaster tool
  
  return NextResponse.redirect(
    `https://api.farcaster.xyz/miniapps/hosted-manifest/${hostedManifestId}`,
    { status: 302 }
  );
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
