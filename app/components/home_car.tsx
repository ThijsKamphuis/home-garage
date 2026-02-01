import { FaTachometerAlt } from "react-icons/fa";

export default function HomeCar () {
    return (
        <div className="bg-linear-to-br from-blue-900 to-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 relative overflow-hidden mb-3 m-4">
            <FaTachometerAlt className="absolute -right-4 -bottom-4 text-9xl text-white opacity-5" />
            
            <div className="relative z-10">
                <h2 className="text-slate-300 text-sm font-semibold uppercase tracking-wider">VOLVO XC70 2.5T</h2>
                <div className="flex items-baseline mt-2">
                    <span className="text-4xl font-mono font-bold text-white">424640</span>
                    <span className="ml-2 text-blue-400 font-medium">km</span>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-sm font-bold flex items-center justify-between">
                    <div>
                        <span className="bg-blue-500 p-1 rounded-l">NL</span>
                        <span className="bg-yellow-500 text-black px-2 py-1 rounded-r">43-RP-XX</span>
                    </div>
                    <span className="bg-slate-500/60 text-white px-2 py-1 rounded ml-4">YV1SZ595361212575</span>
                </div>
            </div>
        </div>
    );
}