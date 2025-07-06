import { Redis } from "@upstash/redis";
import { env } from "process";

// Check if Redis URL is valid (not temp or placeholder)
const isValidRedisUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  return url.startsWith("https://") && !url.includes("temp");
};

if (!env.REDIS_URL || !env.REDIS_TOKEN || !isValidRedisUrl(env.REDIS_URL)) {
  console.warn(
    "REDIS_URL or REDIS_TOKEN environment variable is not defined or invalid, please add to enable background notifications and webhooks.",
  );
}

export const redis =
  env.REDIS_URL && env.REDIS_TOKEN && isValidRedisUrl(env.REDIS_URL)
    ? new Redis({
        url: env.REDIS_URL,
        token: env.REDIS_TOKEN,
      })
    : null;
