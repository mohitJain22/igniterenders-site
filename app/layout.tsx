import "./globals.css"; // <-- This line makes Tailwind styles load

export const metadata = {
  title: "IgniteRenders — 3D Product Ads",
  description: "High-impact 3D product ads that convert",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">{children}</body>
    </html>
  );
}
