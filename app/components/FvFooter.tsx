import Link from "next/link";

export default function FvFooter() {
    return (
        <footer className="w-full py-16 text-white">

            <div className="flex justify-between items-end">

                {/* 左 */}
                <div className="flex flex-col gap-4 max-w-md">
                    <p className="text-xs text-white/50 text-left">
                        © 2026 Hideto Kajitani. All Rights Reserved.
                    </p>

                    <div className="flex flex-col gap-1 text-left">
                        <p className="text-sm text-white/70 leading-relaxed">
                            私たちは、機能と美しさを両立したデジタル体験を創り出します。
                        </p>
                        <p className="text-sm text-white/70 leading-relaxed">
                        細部にこだわり、本質的な価値を届けます。
                        </p>
                    </div>
                    
                </div>

                {/* 右 */}
                <div className="flex flex-col items-end gap-3 text-right">
                    <Link
                        href="#"
                        className="border border-white/40 px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition"
                    >
                        プロジェクトのご相談はこちら →
                    </Link>

                    <p className="text-xs text-white/50 max-w-xs">
                        アイデアを、かたちに。<br />
                        一緒に価値あるものを創りましょう。
                    </p>
                </div>

            </div>

        </footer>
    );
}