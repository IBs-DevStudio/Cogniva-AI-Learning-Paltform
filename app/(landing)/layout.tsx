import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Cogniva - AI Learning Revolution",
  description: "Get instant voice tutors for interviews, exams, and learning any subject quickly. Built by IBS Dev World - turning complex ideas into simple, user-friendly apps.",
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
};

// Landing page layout - just metadata, no nested HTML structure
export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
