import NavMenu from "./components/NavMenu";
import LanguageSwitch from "./components/LanguageSwitch";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ヘッダー */}
                <header className="grid grid-cols-3 items-start pt-6 sm:pt-8 md:pt-10">
                    <div />

                    <div className="flex justify-center">
                        <NavMenu />
                    </div>

                    <div className="flex justify-end">
                        <LanguageSwitch />
                    </div>
                </header>

                {/* ヒーロー（タイトル） */}
                <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">

                    <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight uppercase">
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

                </section>

            </div>
        </main>
    );
}