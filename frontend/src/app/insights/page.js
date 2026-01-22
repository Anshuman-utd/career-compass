import { Suspense } from "react";
import InsightsClient from "./InsightsClient";

export default function InsightsPage() {
    return (
        <Suspense fallback={<Loading />}>
            <InsightsClient />
        </Suspense>
    );
}

function Loading() {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="bg-white/5 border border-white/10 px-10 py-6 rounded-2xl animate-pulse">
                <p className="text-gray-400">Loading career insights…</p>
            </div>
        </main>
    );
}
