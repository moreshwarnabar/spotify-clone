# Spotify Clone - Next.js

This project is a Spotify clone built using Next.js, TypeScript, and Supabase for authentication and data storage. It provides a user interface similar to Spotify, allowing users to browse songs, create playlists, upload music, and manage their accounts.  It also includes Stripe integration for subscriptions.

## Features

*   **Browse Songs:** Explore a curated collection of music.
*   **User Authentication:** Securely sign up and log in using Supabase Auth.
*   **Playlist Management:** Create and manage personal playlists.
*   **Music Upload:** Upload your own music to the platform (premium feature).
*   **Search Functionality:** Quickly find your favorite songs and artists.
*   **Like Songs:**  Add songs to your favorites.
*   **Account Management:**  Manage your account settings and subscription.
*   **Subscription:** Integrated with Stripe for subscription management.
*   **Responsive Design:** Enjoy the application on various devices.
*   **Music Playback:** Play songs using a custom audio player with volume control.
*   **Server Side Rendering:** Using server components to fetch data from database.

## Technologies Used

*   **Next.js:** React framework for building server-rendered applications.
*   **TypeScript:** Static typing for enhanced code quality and maintainability.
*   **Supabase:** Backend-as-a-service for authentication, database, and storage.
*   **Stripe:** For subscription and payment processing.
*   **Tailwind CSS:** Utility-first CSS framework for styling.
*   **Zustand:** State management library.
*   **React Hook Form:** For form management.
*   **React Hot Toast:** For displaying notifications.
*   **React Icons:**  For using icons.
*   **use-sound:** For playing sound effects.
*   **Radix UI:** For accessible UI components.
*   **Query String:** For manipulating URL query strings.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd spotify-clone
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install or pnpm install or bun install
    ```

3.  **Set up environment variables:**

    *   Create a `.env.local` file in the root directory.
    *   Add the following environment variables:

        ```
        NEXT_PUBLIC_SUPABASE_URL=<Your Supabase URL>
        NEXT_PUBLIC_SUPABASE_ANON_KEY=<Your Supabase Anon Key>
        SUPABASE_SERVICE_ROLE_KEY=<Your Supabase Service Role Key>
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<Your Stripe Publishable Key>
        STRIPE_SECRET_KEY=<Your Stripe Secret Key>
        STRIPE_WEBHOOK_SECRET=<Your Stripe Webhook Secret>
        NEXT_PUBLIC_SITE_URL=http://localhost:3000  (or your deployed URL)
        ```

    *   Replace the placeholder values with your actual Supabase and Stripe credentials.

4.  **Run database migrations:**

    *  Make sure you have the supabase CLI installed: `npm install -g supabase`
    *  Run `supabase init` in the project root.
    *  Run `supabase db push` to apply the database schema.

5.  **Start the development server:**

    ```bash
    npm run dev  # or yarn dev or pnpm dev or bun dev
    ```

6.  **Open your browser and navigate to `http://localhost:3000`**

## Configuration

*   **Supabase:** Configure your Supabase project with the required tables and storage buckets.
*   **Stripe:** Set up your Stripe account and configure the webhook endpoint.
*   **Environment Variables:** Ensure all necessary environment variables are properly configured in the `.env.local` file.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Learn More

To learn more about Next.js, take a look at the following resources:

*   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
*   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
