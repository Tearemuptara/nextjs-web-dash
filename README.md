## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

NOTES

General overall structure:
/app: routes, components, app logic
/app/lib: app functions (reusable utility, data fetching), placeholder data
/app/ui: UI Components like cards, tables, forms - includes pre-styled
/public: static assets (images, files, etc.)

Placeholder data: good for when API isn't ready yet
 - placeholder JSON format or as JS objects
 - 3rd party service like mockAPI

TypeScript:
The Next.js app router course is manually declaring the data types, but for better type-safety, recommend Prisma
or Drizzle, which automatically generates types based on your database schema.

Next.js detects if your project uses TypeScript and automatically installs the necessary packages and configuration. Next.js also comes with a TypeScript plugin for your code editor, to help with auto-completion and type-safety.

pnpm i //installs project packages
pnpm dev //starts the dev server port 3000

page: UI that is rendered on a specific route; page.tsx should default export a React component:

    export default function Page() {
    return <h1>Hello Next.js!</h1>
    }

