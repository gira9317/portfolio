"use client";

import Image from "next/image";
import { useState } from "react";

type Language = "ja" | "en";

export default function LanguageSwitch() {
    const [language, setLanguage] = useState<Language>("ja");
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        {
            code: "ja" as const,
            label: "JA",
            flag: "/flags/ja.svg",
            alt: "Japanese",
        },
        {
            code: "en" as const,
            label: "EN",
            flag: "/flags/eng.svg",
            alt: "English",
        },
    ];

    const currentLanguage = languages.find((item) => item.code === language);

    const handleSelect = (code: Language) => {
        setLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* PC表示 */}
            <div className="hidden sm:flex items-center text-sm font-medium text-white">
                <button
                    type="button"
                    onClick={() => setLanguage("ja")}
                    className={`flex cursor-pointer items-center gap-2 px-4 transition-opacity ${
                        language === "ja" ? "opacity-100" : "opacity-50"
                    }`}
                >
                    <Image
                        src="/flags/ja.svg"
                        alt="Japanese"
                        width={20}
                        height={20}
                        className="rounded-sm"
                    />
                    <span className="uppercase">JA</span>
                </button>

                <div className="mx-1 h-4 w-px bg-white/50" />

                <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`flex cursor-pointer items-center gap-2 px-4 transition-opacity ${
                        language === "en" ? "opacity-100" : "opacity-50"
                    }`}
                >
                    <Image
                        src="/flags/eng.svg"
                        alt="English"
                        width={20}
                        height={20}
                        className="rounded-sm"
                    />
                    <span className="uppercase">EN</span>
                </button>
            </div>

            {/* スマホ表示 */}
            <div className="sm:hidden">
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex cursor-pointer items-center rounded-md border border-white/15 p-1 transition-opacity hover:opacity-90"
                    aria-label="Change language"
                    aria-expanded={isOpen}
                >
                    {currentLanguage && (
                        <Image
                            src={currentLanguage.flag}
                            alt={currentLanguage.alt}
                            width={20}
                            height={20}
                            className="rounded-sm"
                        />
                    )}
                </button>

                {isOpen && (
                    <div className="absolute right-0 top-full z-20 mt-2 min-w-[88px] rounded-md border border-white/15 bg-black/95 p-1 shadow-lg backdrop-blur-sm">
                        {languages.map((item) => (
                            <button
                                key={item.code}
                                type="button"
                                onClick={() => handleSelect(item.code)}
                                className={`flex w-full cursor-pointer items-center gap-2 rounded px-2 py-2 text-sm transition-colors ${
                                    language === item.code
                                        ? "bg-white/10 text-white"
                                        : "text-white/70 hover:bg-white/5 hover:text-white"
                                }`}
                            >
                                <Image
                                    src={item.flag}
                                    alt={item.alt}
                                    width={20}
                                    height={20}
                                    className="rounded-sm"
                                />
                                <span className="uppercase">{item.label}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}