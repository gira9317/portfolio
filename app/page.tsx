import NavMenu from "./components/NavMenu";
import LanguageSwitch from "./components/LanguageSwitch";
import FvFooter from "./components/FvFooter";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-black text-white">

            {/* ヘッダー */}
            <header className="absolute inset-x-0 top-0 z-10 pt-6 sm:pt-8 md:pt-10">
                <div className="mx-auto grid w-full max-w-7xl grid-cols-3 items-start px-4 sm:px-6 lg:px-8">
                    <div />

                    <div className="flex justify-center">
                        <NavMenu />
                    </div>

                    <div className="flex justify-end">
                        <LanguageSwitch />
                    </div>
                </div>
            </header>

            {/* ヒーロー中央 */}
            <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
                <section className="flex min-h-screen flex-col justify-center">
                    <div className="flex flex-col items-center justify-center text-center">
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
                </section>
            </div>

            {/* 下 */}
            <div className="absolute inset-x-0 bottom-0 hidden md:block px-8">
                <div className="flex w-full items-end justify-between">
                    <FvFooter />
                </div>
            </div>
        </main>
    );
}