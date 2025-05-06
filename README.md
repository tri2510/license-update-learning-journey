
## Introduction

This repo provide design and sourcecode for learning-journey module.

## UX design
UX design can be found [here](https://www.figma.com/proto/txyROkbkONSYR34O68JvQk/Playground-Learning?page-id=560%3A18067&node-id=560-18279&viewport=-1774%2C271%2C0.19&t=EBj90R0DJnst632I-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=560%3A18279&show-proto-sidebar=1&hide-ui=1)

## Techonologies

- This is a SSR webapp build by NextJS
- Language: Typescript
- Database: Mongo DB

## Deployment

- The whole project will be packaged in a Docker image. It needs to connect to an external MongoDB.
- This web app is designed to be served in two ways:

  1. Standalone web app; it can be hosted for public or internal use.
  2. Embedded in the playground.digital.auto platform as a built-in learning tool.

### Considerations 
- Package and deploy by npm, npx

# For developer

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
