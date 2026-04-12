import Link from "next/link";

export default function NavMenu(){
    return(
        <main>
            <nav className="flex flex-col items-center justify-center gap-1">
                <div className="flex flex-wrap items-center justify-center">
                    <Link
                        href="/"
                        className="px-2 py-0 text-sm font-medium leading-[160%] uppercase text-white transition-opacity duration-200"
                    >
                        Home
                    </Link>

                    <Link
                        href="#"
                        className="px-2 py-0 text-sm font-medium leading-[160%] uppercase text-white/50 transition-opacity duration-200 hover:text-white hover:opacity-100"
                    >
                        About us
                    </Link>
                
                    <Link
                        href="#"
                        className="px-2 py-0 text-sm font-medium leading-[160%] uppercase text-white/50 transition-opacity duration-200 hover:text-white hover:opacity-100"
                    >
                        Works
                    </Link>

                    <Link
                        href="#"
                        className="px-2 py-0 text-sm font-medium leading-[160%] uppercase text-white/50 transition-opacity duration-200 hover:text-white hover:opacity-100"
                    >
                        Contact me
                    </Link>
                </div>
            </nav>
        </main>
        
    )
}