import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: {
        default: "鍛治谷英斗 | Webエンジニア・映像クリエイター",
        template: "%s | 鍛治谷英斗",
    },
    description:
        "Next.js・Supabaseを用いたWeb開発と映像制作。個人開発や制作実績を掲載しています。",
    openGraph: {
        title: "鍛治谷英斗 | Webエンジニア・映像クリエイター",
        description:
            "Next.js・Supabaseを用いたWeb開発と映像制作。個人開発や制作実績を掲載しています。",
        images: ["/og.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="ja"
            className={`${inter.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                {children}
            </body>
        </html>
    );
}