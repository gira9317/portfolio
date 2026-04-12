import NavMenu from "./components/NavMenu";
import LanguageSwitch from "./components/LanguageSwitch";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <header className="grid grid-cols-3 items-start pt-6 sm:pt-8 md:pt-10">
                    <div />

                    <div className="flex justify-center">
                        <NavMenu />
                    </div>

                    <div className="flex justify-end">
                        <LanguageSwitch />
                    </div>
                </header>
            </div>
        </main>
    );
}