import type { Metadata } from 'next';
import JpgToPngTool from './components/JpgToPngTool';

export const metadata: Metadata = {
  title: 'JPG to PNG Converter — Convert JPG Images to PNG Format',
  description: 'Convert JPG images to PNG format with transparency support. Fast, secure, and built for daily workflows.',
  keywords: 'JPG to PNG, image converter, PNG converter, JPG to PNG converter, convert JPG, browser tool',
  openGraph: {
    title: 'JPG to PNG Converter',
    description: 'Convert JPG images to PNG format directly in your browser.',
    type: 'website',
  },
};

const featurePillars = [
  {
    title: 'Transparency support',
    description: 'PNG format supports transparent backgrounds, perfect for logos, icons, and web graphics.',
  },
  {
    title: 'Privacy-first workflow',
    description: 'All conversion happens in your browser. Your images never leave your device.',
  },
  {
    title: 'Lossless quality',
    description: 'PNG is a lossless format that preserves image quality without compression artifacts.',
  },
];

const seoContent = [
  {
    title: 'Why convert JPG to PNG',
    body: [
      'JPG and PNG serve different purposes in digital imaging. JPG excels at compressing photographic images with millions of colors, making files smaller for web use and storage. However, JPG uses lossy compression, which means some image data is permanently discarded to achieve smaller file sizes. PNG, on the other hand, uses lossless compression and supports transparency, making it ideal for graphics, logos, screenshots, and images that need to be edited multiple times without quality degradation.',
      'The most compelling reason to convert JPG to PNG is transparency support. If you have a logo, icon, or graphic element that needs to sit on top of different backgrounds, PNG is the only choice. JPG files always have a solid background color, typically white, which creates unsightly boxes around your images when placed on colored or textured backgrounds. PNG allows you to remove the background entirely, creating clean, professional-looking graphics.',
      'Web designers and developers frequently convert JPG to PNG when working with user interface elements. Buttons, icons, badges, and other UI components need transparent backgrounds to blend seamlessly with various page designs. A JPG button with a white background looks unprofessional on a dark website theme, while a PNG version with transparency adapts perfectly to any color scheme.',
      'Another critical use case involves image editing workflows. When you edit a JPG and save it, the compression algorithm runs again, degrading quality further. This cumulative loss becomes noticeable after several edit cycles. Converting to PNG before editing preserves quality throughout the workflow. Once editing is complete, you can always convert back to JPG for final delivery if file size is a concern.',
      'Screenshot workflows benefit immensely from PNG format. When capturing screen content for tutorials, documentation, or bug reports, PNG preserves text clarity and interface elements perfectly. JPG compression can make text blurry and introduce artifacts around sharp edges, reducing readability. Professional documentation always uses PNG for screenshots to ensure maximum clarity.',
    ],
  },
  {
    title: 'Understanding image format differences',
    body: [
      'The technical differences between JPG and PNG formats determine their ideal use cases. JPG uses discrete cosine transform (DCT) compression, which analyzes image data in 8x8 pixel blocks and discards information that human eyes are less likely to notice. This works wonderfully for photographs with gradual color transitions but fails dramatically for graphics with sharp edges, text, or solid colors. PNG uses DEFLATE compression, the same algorithm used in ZIP files, which compresses data without any loss.',
      'Color depth represents another significant difference. JPG supports 24-bit color (16.7 million colors) but no transparency. PNG supports 24-bit color plus an 8-bit alpha channel for transparency, or 8-bit indexed color with transparency. This alpha channel allows each pixel to have varying levels of transparency, from completely opaque to fully transparent, enabling smooth edges and anti-aliasing effects that blend perfectly with any background.',
      'File size considerations often drive format choices. JPG files are typically smaller than PNG files for photographic content because lossy compression is highly effective on complex images with many colors. However, for graphics with large areas of solid color, text, or simple shapes, PNG can actually produce smaller files than JPG while maintaining perfect quality. The compression algorithm excels at finding patterns in uniform areas.',
      'Browser and software support for both formats is universal. Every web browser, image editor, and operating system handles both JPG and PNG without issues. This universality makes conversion between formats straightforward and risk-free. You never need to worry about compatibility when choosing between these formats—the decision comes down purely to technical requirements and quality considerations.',
      'Progressive rendering capabilities differ between formats. Progressive JPG files can display a low-quality preview quickly while the full image loads, improving perceived performance on slow connections. PNG supports interlacing, which achieves a similar effect. However, for most modern web applications with fast connections, this distinction matters less than it did in the early internet era.',
    ],
  },
  {
    title: 'Common JPG to PNG conversion scenarios',
    body: [
      'Logo preparation represents one of the most frequent conversion needs. Companies receive logos in JPG format from designers or download them from websites, but these files have white or colored backgrounds. Converting to PNG and removing the background creates versatile logo files that work on business cards, websites, presentations, and marketing materials regardless of background color. Professional brand guidelines always include PNG versions of logos with transparent backgrounds.',
      'E-commerce product photography often starts with JPG files from cameras but needs PNG versions for certain applications. Product images displayed on colored or patterned backgrounds require transparency. Converting product photos to PNG and removing backgrounds creates clean, professional product listings that focus attention on the item itself rather than distracting backgrounds.',
      'Social media graphics frequently require [JPG to PNG] conversion for optimal results. Profile pictures, cover images, and promotional graphics often need transparent elements to layer over platform-specific backgrounds. Creating engaging social media content involves combining multiple images, and PNG transparency enables seamless compositing that looks professional and polished.',
      'Print design workflows commonly involve format conversions. Designers receive client-provided images in JPG format but need PNG versions for layout work. Transparent PNG files allow designers to position images over colored backgrounds, textures, or other design elements without unsightly white boxes. This flexibility is essential for creating sophisticated print layouts.',
      'Mobile app development requires PNG assets for icons, splash screens, and UI elements. Developers often receive design mockups or assets in JPG format but need PNG versions with transparency for implementation. App icons particularly must have transparent backgrounds to display correctly on various device home screens and app stores.',
    ],
  },
  {
    title: 'Technical aspects of browser-based conversion',
    body: [
      'Modern web browsers provide powerful APIs for image manipulation without requiring server infrastructure. The HTML5 Canvas API allows JavaScript to read image files, manipulate pixel data, and export results in different formats. When you upload a JPG file, the browser decodes it into raw pixel data, which can then be re-encoded as PNG. This entire process happens locally, ensuring privacy and eliminating upload/download times.',
      'The conversion process involves several steps. First, the File API reads the selected JPG file as a data URL or array buffer. Next, an Image object loads this data, triggering the browser\'s built-in image decoder. Once loaded, the image is drawn onto a Canvas element, which provides a pixel-perfect representation. Finally, the Canvas toBlob method encodes the pixel data as PNG, creating a downloadable file.',
      'Performance considerations affect user experience. Small images convert nearly instantaneously, while large high-resolution images may take a few seconds. Modern JavaScript engines and GPU-accelerated canvas rendering make even large conversions reasonably fast. The browser handles memory management automatically, though extremely large images (over 10-20MB) may cause slowdowns on older devices.',
      'Quality preservation is guaranteed in browser-based conversion. Since PNG is lossless, the pixel data from the JPG file transfers perfectly to the PNG output. Any quality loss present in the original JPG remains, but no additional degradation occurs. This makes browser conversion identical in quality to desktop software conversions, with the added benefits of convenience and privacy.',
      'Cross-platform compatibility ensures consistent results. Whether users access the tool on Windows, macOS, Linux, iOS, or Android, the conversion produces identical output. Browser standardization means the Canvas API behaves the same across platforms, eliminating the "works on my machine" problems that plague traditional software.',
    ],
  },
];

const faqs = [
  {
    question: 'Does this tool upload my images anywhere?',
    answer: 'No. The entire conversion happens in your browser using JavaScript. Your images never touch a server.',
  },
  {
    question: 'Will the PNG file be larger than the JPG?',
    answer: 'Usually yes, because PNG uses lossless compression. However, the quality will be perfect, and you can always optimize the PNG later if needed.',
  },
  {
    question: 'Can I convert multiple images at once?',
    answer: 'Currently, the tool processes one image at a time to ensure optimal performance and user experience.',
  },
  {
    question: 'Does the conversion remove the background?',
    answer: 'No, this tool converts the format only. To remove backgrounds, you would need a separate background removal tool.',
  },
];

export default function Home() {
  return (
    <div className="bg-grid-slate min-h-screen">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex flex-col gap-1">
            <a className="text-2xl font-semibold tracking-tight text-white" href="/">
              JPG to PNG
            </a>
            <p className="text-sm text-slate-400">Convert JPG images to PNG format</p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a className="transition hover:text-white" href="/">Home</a>
            <a className="transition hover:text-white" href="mailto:support@lightning.studio">Support</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <JpgToPngTool />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featurePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-12">
          <h2 className="text-3xl font-semibold text-white">In-depth guide</h2>
          {seoContent.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xl font-semibold text-white">{section.title}</h3>
              <div className="space-y-4">
                {section.body.map((paragraph, idx) => {
                  const linkMatch = paragraph.match(/\[JPG to PNG\]/);
                  if (linkMatch) {
                    const parts = paragraph.split('[JPG to PNG]');
                    return (
                      <p key={idx} className="leading-relaxed text-slate-300">
                        {parts[0]}
                        <a 
                          href="https://toolsvana.com/tool/jpg-to-png" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300"
                        >
                          JPG to PNG
                        </a>
                        {parts[1]}
                      </p>
                    );
                  }
                  return <p key={idx} className="leading-relaxed text-slate-300">{paragraph}</p>;
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-16 border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        <p>All processing happens locally in your browser. Powered by Lightning Studio.</p>
      </footer>
    </div>
  );
}
