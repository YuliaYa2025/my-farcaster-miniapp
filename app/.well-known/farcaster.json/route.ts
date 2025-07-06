import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  // Get the base URL from environment or use the current request
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://farcaster-miniapp-starter-8a8ags00p-yulia-yanochkinas-projects.vercel.app";
  
  // Serve manifest directly with correct account association
  const manifest = {
    "accountAssociation": {
      "header": "eyJmaWQiOjExMDg3MzgsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg5QmRmRWMwN0VlMDNmNjBkMzIyQjFFNDVlRjcwNzAzMmZmOEM2MzRjIn0",
      "payload": "eyJkb21haW4iOiJmYXJjYXN0ZXItbWluaWFwcC1zdGFydGVyLThhOGFnczAwcC15dWxpYS15YW5vY2hraW5hcy1wcm9qZWN0cy52ZXJjZWwuYXBwIn0",
      "signature": "MHhmYmE0MmU3YzhiZWM0YTE4YTJmYjQxOWU1ODI1OWE1NzY1ZTIyMGZhYTZhYTA4ZDc5MmYxMWFlMjVjOTUwYmZkNDkyNDIwMWI0YTM3ZGNlN2RiYTg5ZWExYjk3Y2Q5MTQ2NzE3NjE4NzI3MTBlOWI5NWE1ZDExN2RkOGY0M2NmZjFi"
    },
    "frame": {
      "name": "BA Survival Kit",
      "homeUrl": 'https://farcaster-miniapp-starter-8a8ags00p-yulia-yanochkinas-projects.vercel.app',
      "iconUrl": `https://farcaster-miniapp-starter-8a8ags00p-yulia-yanochkinas-projects.vercel.app/images/logo.png`,
      "version": "1",
      "imageUrl": `https://farcaster-miniapp-starter-8a8ags00p-yulia-yanochkinas-projects.vercel.app/images/feed.png`,
      "subtitle": "Your gamified Devconnect companion",
      "webhookUrl": "https://farcaster-miniapp-starter-8a8ags00p-yulia-yanochkinas-projects.vercel.app/api/webhook",
      "description": "Explore, earn XP, and connect during Devconnect",
      "heroImageUrl": `https://farcaster-miniapp-starter-8a8ags00p-yulia-yanochkinas-projects.vercel.app/images/splash.png`,
      "splashImageUrl": `https://farcaster-miniapp-starter-8a8ags00p-yulia-yanochkinas-projects.vercel.app/images/splash.png`,
      "primaryCategory": "games",
      "splashBackgroundColor": "#E6F3FF"
    }
  };

  return NextResponse.json(manifest, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    },
  });
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
