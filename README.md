# BA Survival Kit

Based on a Next.js Farcaster starter kit 

| Component           | Purpose                                                              |
| ------------------- | -------------------------------------------------------------------- |
| `Home`              | Welcome screen: event overview, XP intro, and "Start Mission" button |
| `Features`          | Active XP Missions list (or claimed progress)                        |
| `Buttons`           | ["Claim +10XP", "Open Map 🗺️", "My XP 🧠"]                          |



Set up .md files for Claude

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Verify environment variables:

The environment variables enable the following features:

- Frame metadata - Sets up the Frame Embed that will be shown when you cast your frame
- Account assocation - Allows users to add your frame to their account, enables notifications
- Redis API keys - Enable Webhooks and background notifications for your application by storing users notification details

```bash
# Required for Frame metadata
NEXT_PUBLIC_URL=

# Required to allow users to add your frame
NEXT_PUBLIC_FARCASTER_HEADER=
NEXT_PUBLIC_FARCASTER_PAYLOAD=
NEXT_PUBLIC_FARCASTER_SIGNATURE=

# Required for user authentication
NEYNAR_API_KEY=
JWT_SECRET=

# Required for webhooks and background notifications
REDIS_URL=
REDIS_TOKEN=
```

3. Start the development server:

```bash
npm run dev
```

4. Run a local tunneling server

- [NGROK](https://ngrok.com)
- [Local Tunnel](https://theboroer.github.io/localtunnel-www/)

5. Generate your Farcaster Manifest variables

- Follow these [instructions](https://miniapps.farcaster.xyz/docs/guides/publishing)
- Visit [Manifest Tool](https://warpcast.com/~/developers/mini-apps/manifest)
- Paste your tunnel domain

## Template Features

### Frame Configuration

- `.well-known/farcaster.json` endpoint configured for Frame metadata and account association
- Frame metadata automatically added to page headers in `layout.tsx`

### Background Notifications

- Redis-backed notification system using Upstash
- Ready-to-use notification endpoints in `api/notify` and `api/webhook`
- Notification client utilities in `lib/notification-client.ts`

### MiniApp Provider

The app is wrapped with `MiniAppProvider` in `providers.tsx`, configured with:

- Access to Mini App context
- Sets up Wagmi Connectors
- Sets up Mini App SDK listeners
- Applies Safe Area Insets

### Dynamic Preview Images

- `dynamic-image-example/[id]/page.tsx` show how to create a Mini App URL resolving to a custom preview image
- `api/og/example/[id]/route.ts` shows how to generate a custom preview image

