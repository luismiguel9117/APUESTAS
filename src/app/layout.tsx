import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PokerListings - Poker News, Guides, Strategies & Reviews',
  description:
    'Well over one million online poker players have taken advantage of PokerListings’ exclusive sign-up deals and freerolls.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="home page-template-default page page-id-22286">
        {children}
      </body>
    </html>
  );
}
