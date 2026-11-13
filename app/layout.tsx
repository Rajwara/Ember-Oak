import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  openGraph: { images: ["/assets/images/social-share-preview.png"] },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/assets/images/favicon-32.webp",
    apple: "/assets/images/apple-touch-icon-256.webp",
  },
};

// Webflow's interaction engine reads these ids to find the page's animations.
const WF_PAGE = "68d9d8a4764446c80998d6b0";
const WF_SITE = "68d9d8a2764446c80998d6a8";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-wf-page={WF_PAGE} data-wf-site={WF_SITE} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="/assets/css/smokehouse-restaurant.webflow.shared.ee2cd7ae9.css"
        />
        <link rel="stylesheet" href="/assets/css/fonts.css" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              '!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);',
          }}
        />
      </head>
      <body className="body">
        {children}
        {/*
          jQuery + Webflow runtime (navbar, scroll animations, forms), bundled in load order.
          It must run before the browser's load event, like in the original Webflow page:
          the intro animation and the closed state of the menu panels start on that event.
        */}
        <script src="/assets/js/webflow-bundle.js" defer />
      </body>
    </html>
  );
}
