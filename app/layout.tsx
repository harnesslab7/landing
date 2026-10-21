import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://slashworkspace.com"),
  title: "/workspace, shared AI context for small teams",
  description:
    "Your team's files, rules, skills and decisions, available inside the Claude, ChatGPT and Gemini subscriptions you already pay for. No API tokens.",
  openGraph: {
    title: "/workspace, shared AI context for small teams",
    description:
      "Each team member uses their own AI subscription but shares the same context.",
    url: "https://slashworkspace.com",
    siteName: "/workspace",
    type: "website",
  },
};

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Nunito:wght@700;800&display=swap";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body>{children}</body>
    </html>
  );
}
