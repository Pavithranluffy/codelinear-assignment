import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  title: "N7 — The new foundation of modern banking",
  description:
    "N7 drives innovation and growth, providing seamless customer experience and operational excellence for modern financial institutions.",
  metadataBase: new URL("https://n7-landing.vercel.app"),
  openGraph: {
    title: "N7 — The new foundation of modern banking",
    description:
      "Cloud-based core banking, digital banking out-of-the-box, and tailored fintech solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-ink-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
