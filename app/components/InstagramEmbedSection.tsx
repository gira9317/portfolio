'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
    interface Window {
        instgrm?: {
            Embeds?: {
                process: () => void;
            };
        };
    }
}

export default function InstagramEmbedSection() {
    useEffect(() => {
        if (window.instgrm?.Embeds) {
            window.instgrm.Embeds.process();
        }
    }, []);

    return (
        <section className="w-full text-white py-16">
            <div className="max-w-5xl mx-auto px-4">
                <div className="rounded-xl overflow-hidden bg-white">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/DB8X49LvIjI/?utm_source=ig_embed&utm_campaign=loading"
                        data-instgrm-version="14"
                        style={{
                            background: '#FFF',
                            border: 0,
                            borderRadius: '3px',
                            boxShadow:
                                '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                            margin: '1px auto',
                            maxWidth: '540px',
                            minWidth: '326px',
                            padding: 0,
                            width: 'calc(100% - 2px)',
                        }}
                    >
                        <a
                            href="https://www.instagram.com/reel/DB8X49LvIjI/?utm_source=ig_embed&utm_campaign=loading"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagramで見る
                        </a>
                    </blockquote>
                </div>

                <Script
                    src="https://www.instagram.com/embed.js"
                    strategy="lazyOnload"
                    onReady={() => {
                        if (window.instgrm?.Embeds) {
                            window.instgrm.Embeds.process();
                        }
                    }}
                />
            </div>
        </section>
    );
}