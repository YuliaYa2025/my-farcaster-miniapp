import { NextResponse } from "next/server";

type FarcasterManifest = {
  accountAssociation: {
    header: string;
    payload: string;
    signature: string;
  };
  miniapp: {
    version: string;
    name: string;
    iconUrl: string;
    homeUrl: string;
    imageUrl: string;
    buttonTitle: string;
    splashImageUrl: string;
    splashBackgroundColor: string;
  };
};

export async function GET(): Promise<NextResponse<FarcasterManifest>> {
  try {
    // Return a basic manifest for now
    const manifest: FarcasterManifest = {
      "accountAssociation": {
        "header": "eyJmaWQiOjExMDg3MzgsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg5QmRmRWMwN0VlMDNmNjBkMzIyQjFFNDVlRjcwNzAzMmZmOEM2MzRjIn0",
        "payload": "eyJkb21haW4iOiI2MzE5LTE5MC0yMTAtMzgtMTMzLm5ncm9rLWZyZWUuYXBwIn0",
        "signature": "MHg5N2ExYzMzYmMwNmU3NTdlODgzYWEyNTQ0OTI2ZDkwMmVlOTU3NTNjNTY0YTE3YTUzMWEzMWM4MGQwMWE3OWQ3NGU1NWEyNTIyZTU0NjQxZjZhZDRhMTUzYWU0OTEzYzkxYjljNGJmMzMxNGRhZTFmYTNhMTkxZjkwMDQ2NWM0MjFj"
      },
      "miniapp": {
        "version": "1",
        "name": "Mini App Starter",
        "iconUrl": "https://example.com/icon.png",
        "homeUrl": "https://example.com",
        "imageUrl": "https://example.com/image.png",
        "buttonTitle": "Launch App",
        "splashImageUrl": "https://example.com/splash.png",
        "splashBackgroundColor": "#ffffff"
      }
    };
    
    return NextResponse.json(manifest);
  } catch (error) {
    console.error("Error generating manifest:", error);
    // Return a default manifest on error instead of error response
    const defaultManifest: FarcasterManifest = {
      "accountAssociation": {
        "header": "eyJmaWQiOjExMDg3MzgsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg5QmRmRWMwN0VlMDNmNjBkMzIyQjFFNDVlRjcwNzAzMmZmOEM2MzRjIn0",
        "payload": "eyJkb21haW4iOiI2MzE5LTE5MC0yMTAtMzgtMTMzLm5ncm9rLWZyZWUuYXBwIn0",
        "signature": "MHg5N2ExYzMzYmMwNmU3NTdlODgzYWEyNTQ0OTI2ZDkwMmVlOTU3NTNjNTY0YTE3YTUzMWEzMWM4MGQwMWE3OWQ3NGU1NWEyNTIyZTU0NjQxZjZhZDRhMTUzYWU0OTEzYzkxYjljNGJmMzMxNGRhZTFmYTNhMTkxZjkwMDQ2NWM0MjFj"
      },
      "miniapp": {
        "version": "1",
        "name": "Mini App Starter",
        "iconUrl": "https://example.com/icon.png",
        "homeUrl": "https://example.com",
        "imageUrl": "https://example.com/image.png",
        "buttonTitle": "Launch App",
        "splashImageUrl": "https://example.com/splash.png",
        "splashBackgroundColor": "#ffffff"
      }
    };
    return NextResponse.json(defaultManifest);
  }
}
