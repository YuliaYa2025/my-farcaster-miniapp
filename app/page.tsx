import HomePage from "@/components/pages/home";
import { env } from "@/lib/env";
import { Metadata } from "next";

const appUrl = env.NEXT_PUBLIC_URL;

// Updated embed format following the current Farcaster sharing guide
const miniappEmbed = {
  version: "1", // Updated from "next" to "1"
  imageUrl: `https://farcaster-miniapp-starter-48xlyquct-yulia-yanochkinas-projects.vercel.app/images/feed.png`, // Clean filename for feed embed
  button: {
    title: "🚀 Vamos!",
    action: {
      type: "launch_miniapp", // Updated from "launch_frame" to "launch_miniapp"
      name: "BA Survival Kit", // Updated to match manifest
      url: appUrl,
      splashImageUrl: `https://farcaster-miniapp-starter-48xlyquct-yulia-yanochkinas-projects.vercel.app/images/splash.png`, // Clean filename for splash screen
      splashBackgroundColor: "#E6F3FF", // Updated to match manifest
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "BA Survival Kit",
    description: "Your gamified Devconnect companion - Explore, earn XP, and connect during Devconnect",
    openGraph: {
      title: "BA Survival Kit",
      description: "Your gamified Devconnect companion - Explore, earn XP, and connect during Devconnect",
      images: [
        {
          url: `https://farcaster-miniapp-starter-48xlyquct-yulia-yanochkinas-projects.vercel.app/images/feed.png`,
          width: 1200,
          height: 630,
          alt: "BA Survival Kit"
        }
      ]
    },
    other: {
      // Current format
      "fc:miniapp": JSON.stringify(miniappEmbed),
      // Backward compatibility
      "fc:frame": JSON.stringify({
        ...miniappEmbed,
        button: {
          ...miniappEmbed.button,
          action: {
            ...miniappEmbed.button.action,
            type: "launch_frame" // Keep old type for backward compatibility
          }
        }
      }),
    },
  };
}

export default function Home() {
  return <HomePage />;
}
