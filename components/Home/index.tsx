"use client";

import { useMiniApp } from "@/contexts/miniapp-context";
import { useUser } from "@/contexts/user-context";
import { sdk } from "@farcaster/miniapp-sdk";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const { user, isLoading, error, signIn } = useUser();
  const { isMiniAppReady } = useMiniApp();
  const { address } = useAccount();

  // Call ready() when both component mounts and SDK is ready
  useEffect(() => {
    if (isMiniAppReady) {
      console.log('SDK ready, calling ready()');
      sdk.actions.ready()
        .then(() => {
          console.log('ready() called successfully');
        })
        .catch((error) => {
          console.error('Error calling ready():', error);
        });
    }
  }, [isMiniAppReady]);

  // Show loading state while MiniApp is initializing
  if (!isMiniAppReady) {
    return (
      <div className="bg-white text-black flex min-h-screen flex-col items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto" />
          <p className="text-lg text-muted-foreground">Loading Mini App...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-lg text-muted-foreground">
          {user?.data ? "You are signed in!" : "Sign in to get started"}
        </p>
        <p className="text-lg text-muted-foreground">
          {address
            ? `${address.substring(0, 6)}...${address.substring(
                address.length - 4
              )}`
            : "No address found"}
        </p>

        {!user?.data ? (
          <button
            onClick={signIn}
            disabled={isLoading}
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2 min-w-[160px] min-h-[48px]"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                <span>Signing in...</span>
              </>
            ) : (
              "Sign in"
            )}
          </button>
        ) : (
          <div className="space-y-4">
            {user && (
              <div className="flex flex-col items-center space-y-2 min-h-[160px] justify-center">
                {user.isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  </div>
                ) : (
                  <>
                    <Image
                      src={user.data.pfp_url!}
                      alt="Profile"
                      className="w-20 h-20 rounded-full"
                      width={80}
                      height={80}
                    />
                    <div className="text-center">
                      <p className="font-semibold">{user.data.display_name}</p>
                      <p className="text-sm text-muted-foreground">
                        @{user.data.username}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
