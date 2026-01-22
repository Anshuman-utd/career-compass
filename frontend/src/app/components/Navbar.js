import Link from "next/link";
import { Compass } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 glass">
            <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <Compass className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-300" />
                    <h1 className="text-lg font-semibold tracking-tight">Career Compass</h1>
                </Link>
                <div className="flex gap-8 text-sm text-gray-400">
                    <Link href="/" className="hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link href="/predict" className="hover:text-white transition-colors">
                        Predict
                    </Link>
                </div>
            </div>
        </nav>
    );
}
