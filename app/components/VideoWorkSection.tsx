
export default function VideoWorkSection(){
    return(
        <section className="w-full text-white">
            <div className="max-w-5xl">
                <div className="aspect-video bg-gray-400 flex items-center justify-center">
                {/* あとでvideoやiframe入れる */}
                    <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="white"
                        >
                            <polygon points="8,5 19,12 8,19" />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    <p>2026/01/01</p>
                    <p>東京・八芳園</p>
                    <p>結婚式エンドロール</p>
                </div>
            </div>
        </section>
        
    )
}