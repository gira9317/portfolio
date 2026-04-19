import InstagramEmbedSection from "../components/InstagramEmbedSection"
import VideoWorkSection from "../components/VideoWorkSection"
import WhoAreYouSection from "../components/WhoAreYouSection"

export default function Home() {
    return (
        <main className="relative min-h-screen bg-black text-white">
            <div>
                <VideoWorkSection />
                
            </div>
            <div>
                <InstagramEmbedSection />
            </div>
        </main>
    )
}

