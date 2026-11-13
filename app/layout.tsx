import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Rib & Bone",
  description: "Smokehouse restaurant",
  openGraph: { images: ["/assets/images/68de03bf9be8d331c2a2cebb_Snippet.png"] },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/assets/images/68de2a67df32975f58f034bd_FAICON_EIGHT_32.webp",
    apple: "/assets/images/68de2a6b26c9ba51a8fefba7_FAICON_EIGHT_256.webp",
  },
};

// Webflow's interaction engine reads these ids to find the page's animations.
const WF_PAGE = "68d9d8a4764446c80998d6b0";
const WF_SITE = "68d9d8a2764446c80998d6a8";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-wf-page={WF_PAGE} data-wf-site={WF_SITE} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/css/smokehouse-restaurant.webflow.shared.ee2cd7ae9.css" />
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
        {/* jQuery + Webflow runtime (navbar, scroll animations, forms), bundled in load order. */}
        <Script src="/assets/js/webflow-bundle.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
