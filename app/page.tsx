import NavMenu from "./components/NavMenu";
import LanguageSwitch from "./components/LanguageSwitch";
import FvFooter from "./components/FvFooter";
import WhoAreYouSection from "./components/WhoAreYouSection";

export default function Home() {
    return (
        <main className="w-full bg-black text-white">
            <div className="px-6 py-8 md:px-16">
                <div className="relative mx-auto w-full max-w-7xl">
                    {/* ヘッダー */}
                    <header className="absolute inset-x-0 top-0 z-10 h-16 flex items-center">
                        <div className="grid w-full grid-cols-3">
                            <div />

                            <div className="flex justify-center">
                                <NavMenu />
                            </div>

                            <div className="flex justify-end">
                                <LanguageSwitch />
                            </div>
                        </div>
                    </header>

                    {/* FV */}
                    <section className="relative min-h-[calc(100vh-64px)]">
                        {/* タイトル中央 */}
                        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight uppercase">
                                    ZEP LAB<span className="-ml-2">.</span>
                                </h1>

                                <div className="mt-6 text-white/70">
                                    <p className="text-sm sm:text-base">
                                        Creative Developer / Video Creator
                                    </p>
                                    <p className="mt-2 text-xs sm:text-sm tracking-widest uppercase">
                                        Hideto Kajitani
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FVFooter */}
                        <div className="absolute bottom-8 left-0 hidden w-full md:block">
                            <FvFooter />
                        </div>
                    </section>

                    <WhoAreYouSection />
                </div>
            </div>
        </main>
    );
}