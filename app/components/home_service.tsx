import { FaWrench } from "react-icons/fa";

export default function HomeService () {
    return (
        <div className="bg-linear-to-br from-cyan-700 to-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 relative overflow-hidden mb-6 mx-4">
            <FaWrench className="absolute -right-4 -bottom-4 text-9xl text-white opacity-5" />
            
            <div className="relative z-10">
                <div className="flex items-baseline justify-between">
                    <span className="text-slate-300 text-sm font-semibold uppercase tracking-wider">LAST SERVICE</span>
                    <span className="text-xl font-mono font-bold text-white">31-1-2026</span>
                </div>
                <div className="mt-3 pt-4 border-t border-white/10 text-sm font-bold flex items-center justify-between">
                    <span className="bg-slate-500/60 text-white px-2 py-1 rounded">VIEW</span>
                    <span className="bg-slate-500/60 text-white px-2 py-1 rounded">+ LOG</span>
                </div>
            </div>
        </div>
    );
}