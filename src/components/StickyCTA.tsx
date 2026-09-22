import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function StickyCTA({ checkoutUrl = "https://superprofile.bio/vp/premium-interior-architecture-designing-assets" }: { price?: string; originalPrice?: string; checkoutUrl?: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => setVisible(true), 20000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-5xl glass-strong bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-md grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 p-3 sm:p-4 relative">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
            <span className="rounded-md bg-amber-400/20 text-amber-400 border border-amber-400/30 px-2 py-0.5">🔥 94% OFF</span>
            <span className="text-slate-300 hidden sm:inline">Interior Design Toolkit</span>
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-slate-500 line-through text-sm">₹2,999</span>
            <span className="text-xl sm:text-2xl font-black text-amber-400">₹299</span>
          </div>
        </div>
        <a href={checkoutUrl} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-4 sm:px-6 py-3 text-sm sm:text-base whitespace-nowrap shadow-lg shadow-amber-500/20 hover:scale-105 transition-all">
          📥 Get Instant Access
        </a>
        <button
          onClick={() => setVisible(false)}
          className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors shrink-0 text-slate-400 hover:text-white"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
