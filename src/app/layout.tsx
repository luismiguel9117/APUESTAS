import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chuzonic Play - Apuestas, Promociones, Noticias y Herramientas',
  description:
    'Compara bonos, beneficios y promociones exclusivas de póker, casino y apuestas deportivas en ChuzonicPlay.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/chuzonic-portal.css" />
        <link rel="stylesheet" href="/chuzonic-news.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
