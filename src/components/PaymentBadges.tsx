import { Lock } from "lucide-react";

const badges = [
  { label: "VISA", className: "bg-[#1A1F71] text-white italic font-bold tracking-wider" },
  { label: "Mastercard", className: "bg-white text-[#EB001B]", leading: true, mc: true },
  { label: "UPI", className: "bg-gradient-to-r from-[#099D77] to-[#1A1F71] text-white font-bold" },
  { label: "Paytm", className: "bg-[#00B9F1] text-white font-bold" },
  { label: "PhonePe", className: "bg-[#5F259F] text-white font-bold" },
  { label: "G Pay", className: "bg-white text-[#4285F4] font-bold" },
];

export function PaymentBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted-foreground mr-1">
        <Lock className="h-3 w-3" /> Secure Payments
      </span>
      {badges.map((b) => (
        <span
          key={b.label}
          className={`inline-flex items-center justify-center rounded-md px-2.5 py-1 text-[11px] sm:text-xs shadow-sm ${b.className}`}
          style={b.mc ? { letterSpacing: "-0.02em" } : undefined}
        >
          {b.mc ? (
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-3 w-5">
                <span className="absolute left-0 h-3 w-3 rounded-full bg-[#EB001B]" />
                <span className="absolute right-0 h-3 w-3 rounded-full bg-[#F79E1B] mix-blend-multiply" />
              </span>
              <span className="text-[#1A1F71] font-semibold">Mastercard</span>
            </span>
          ) : (
            b.label
          )}
        </span>
      ))}
    </div>
  );
}
