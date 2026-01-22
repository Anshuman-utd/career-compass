import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12 mt-24">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-100">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="font-semibold text-white mb-4">Career Compass</h3>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                        Empowering your career journey with AI-driven insights and personalized guidance.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-medium text-white mb-4">Product</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link href="/predict" className="hover:text-white transition">Predict</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-xs">
                    © {new Date().getFullYear()} Career Compass. All rights reserved.
                </p>
                <div className="flex gap-6 text-xs text-gray-500">
                    <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
                    <Link href="#" className="hover:text-gray-300">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
