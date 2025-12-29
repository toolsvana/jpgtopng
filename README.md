# JPG to PNG Converter

A fast, privacy-first JPG to PNG converter that runs entirely in your browser. Built with Next.js and optimized for SEO.

## Features

- **100% Client-Side** - No uploads, all processing happens in your browser
- **Transparency Support** - PNG format supports transparent backgrounds
- **Lossless Quality** - Perfect quality preservation without compression artifacts
- **SEO Optimized** - Static export with full content in HTML
- **Privacy First** - Your images never leave your device

## Tech Stack

- **Next.js 16** - Static site generation
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Canvas API** - Browser-native image processing

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the tool.

## Build for Production

```bash
npm run build
```

This creates a static export in the `/out` folder, ready for deployment to Cloudflare Pages or any static hosting.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Connect to Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `out`

## License

MIT
