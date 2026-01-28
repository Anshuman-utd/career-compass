"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Send, Rocket } from "lucide-react";

export default function Predict() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        skills_count: "",
        projects_count: "",
        experience_years: "",
        certifications: "",
        internship: 0,
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("https://career-compass-1-ere9.onrender.com/explain", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, internship: Number(form.internship) }),
            });

            const data = await res.json();

            router.push(
                `/insights?level=${encodeURIComponent(
                    data.readiness_level
                )}&explanation=${encodeURIComponent(data.explanation)}`
            );
        } catch (error) {
            console.error("Error analyzing profile:", error);
            alert("Something went wrong. Please check the backend connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center p-6 pt-32 pb-20">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Context */}
                <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl w-fit">
                        <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Analyze your <br />
                        <span className="text-gray-500">Career Readiness</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Fill in the details to get an AI-driven assessment of your current standing in the job market.
                        Our model evaluates key metrics to provide personalized insights.
                    </p>
                </div>

                {/* Right Side: Form */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                ["skills_count", "Number of Skills", "e.g. 5"],
                                ["projects_count", "Projects Built", "e.g. 3"],
                                ["experience_years", "Years of Experience", "e.g. 1.5"],
                                ["certifications", "Certifications", "e.g. 2"],
                            ].map(([key, label, placeholder]) => (
                                <div key={key} className="space-y-2">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        {label}
                                    </label>
                                    <input
                                        type="number"
                                        name={key}
                                        value={form[key]}
                                        onChange={handleChange}
                                        placeholder={placeholder}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 hover:border-white/20 transition-all placeholder:text-gray-700 font-medium"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Internship Completed?
                            </label>
                            <div className="relative">
                                <select
                                    name="internship"
                                    value={form.internship}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-white/20 hover:border-white/20 transition-all font-medium"
                                >
                                    <option value={0}>No</option>
                                    <option value={1}>Yes</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    ▼
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        Generate Insights
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
