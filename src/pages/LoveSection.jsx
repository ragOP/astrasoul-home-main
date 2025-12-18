import LoveHero from "../components/LoveHero";
import Navbar from "../components/Navbar";

const LoveSection = () => {
    return (
        <div className="min-h-screen flex flex-col gap-2 bg-gradient-to-br from-pink-950 via-rose-900 to-purple-900 relative overflow-hidden">
            <Navbar />

            <LoveHero />

        </div>
    );
}

export default LoveSection;