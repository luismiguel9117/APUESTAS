/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Genera .next/standalone para la imagen Docker (runner minimo).
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      // beforeFiles: se aplica ANTES de las rutas del filesystem, para que
      // la raiz y /odds-calculator sirvan la pagina estatica del calculador.
      beforeFiles: [
        { source: '/', destination: '/odds-calculator.html' },
        { source: '/odds-calculator', destination: '/odds-calculator.html' },
      ],
      // El clon completo de PokerListings sigue disponible en /home.
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
