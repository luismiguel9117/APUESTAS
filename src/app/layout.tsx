import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Texas Hold'em Poker Odds Calculator | Poker Odds Calculator",
  description:
    "Calculate your winning chances with this free Texas Hold'em Poker Odds Calculator. Analyze odds against one or more opponents in real time.",
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
        <link rel="stylesheet" href="/odds-only.css" />
        <link rel="stylesheet" href="/chuzonic.css" />
        <link rel="icon" href="/assets/chuzonic/favicon.png" type="image/png" />
      </head>
      <body className="home page-template-default page page-id-22286 solo-calculadora">
        {children}
      </body>
    </html>
  );
}
