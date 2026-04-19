import Link from "next/link";

export default function WhoAreYouSection() {
    return (
        <section className="w-full text-white">
            {/* 上のラベル */}
            <div className="mb-8">
                <p className="uppercase text-sm tracking-widest text-white/60">
                    Who We Are
                </p>
                <div className="mt-2 h-px w-full bg-white/10" />
            </div>

            {/* メインを section 内で中央寄せ */}
            <div className="flex min-h-80 items-center">
                <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-20 items-center">
                    {/* 左：タイトル */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            コードと映像で、
                            <br />
                            体験を設計する。
                        </h2>
                    </div>

                    {/* 右：説明 */}
                    <div className="flex flex-col items-start">
                        <div className="max-w-md text-sm sm:text-base leading-relaxed text-white/70 space-y-2 py-6">
                            <p>
                                映像制作とWeb開発を軸に、
                                人の心に残る体験と、実際に使われる仕組みを設計しています。
                            </p>

                            <p>
                                見た目の美しさだけでなく、使いやすさや目的への適合まで含めて、
                                一つの体験として丁寧に構築することを大切にしています。
                            </p>
                        </div>

                        <Link
                        href="#"
                        className="border inline-block border-white/40 px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition"
                        >
                        制作物はこちら →
                        </Link>

                    </div>     
                </div>
            </div>   
        </section>
    );
}