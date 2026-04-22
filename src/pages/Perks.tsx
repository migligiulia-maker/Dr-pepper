import { motion } from "motion/react";
import { Star, Zap, Ticket, Gift, Sparkles } from "lucide-react";

export function Perks() {
  return (
    <div className="bg-transparent text-drp-cream min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 md:pt-48 pb-24 px-6 md:px-10 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-drp-maroon rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 border border-drp-silver/30 px-4 py-1.5 text-drp-cream font-bold uppercase tracking-widest text-[10px] mb-8"
          >
            <Star size={14} className="fill-drp-cream text-drp-cream" /> WELCOME TO THE CLUB
          </motion.div>
          <h1 className="text-6xl md:text-[120px] leading-[0.85] font-black uppercase italic tracking-tighter mb-6 text-drp-cream">
            PEPPER<br/><span className="text-drp-silver">PERKS</span>
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 mb-10 max-w-2xl mx-auto leading-snug">
            The rewards program built for true fans. Drink Dr Pepper. Earn points. Get exclusive drops.
          </p>
          <button className="bg-drp-cream text-drp-burgundy px-10 py-5 text-xl font-black uppercase tracking-tighter hover:scale-105 transition-transform shadow-[0_0_40px_rgba(245,245,220,0.2)]">
            Create Free Account
          </button>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 md:px-10 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-drp-cream">
            {[
              { icon: Zap, title: "1. Buy", desc: "Purchase your favorite Dr Pepper products anywhere." },
              { icon: Ticket, title: "2. Scan", desc: "Scan receipts or enter codes under the cap." },
              { icon: Gift, title: "3. Redeem", desc: "Use points for limited merch, tickets, and more." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-drp-maroon border border-white/20 rounded-full flex items-center justify-center mb-6">
                  <step.icon size={40} className="text-drp-cream" />
                </div>
                <h3 className="font-black text-3xl md:text-5xl uppercase italic mb-3 tracking-tighter">{step.title}</h3>
                <p className="opacity-80 font-medium text-lg max-w-[250px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gamified Tiers */}
      <section className="py-24 px-6 md:px-10 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-[80px] leading-[0.85] font-black uppercase italic tracking-tighter mb-4 text-drp-silver">LEVEL UP<br/>YOUR FANDOM</h2>
            <p className="text-xl text-drp-cream/80 max-w-2xl mx-auto font-medium">Unlock better rewards the more you participate.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tier: "Fan", pts: "0 - 499 pts", perks: ["Basic access", "Birthday bonus", "Monthly sweepstakes"] },
              { tier: "Super Fan", pts: "500 - 1499 pts", perks: ["Early merch access", "1.5x points multiplier", "Exclusive digital content"] },
              { tier: "Pepper VIP", pts: "1500+ pts", perks: ["VIP event invites", "Free annual merch box", "2x points multiplier"] },
            ].map((tier, i) => (
              <div key={i} className="bg-transparent border-2 border-white/20 p-8 relative overflow-hidden group hover:bg-drp-maroon transition-colors hover:border-drp-cream">
                <div className="absolute -right-6 -top-6 text-drp-silver opacity-5 group-hover:opacity-20 transition-opacity">
                  <Sparkles size={120} />
                </div>
                <h3 className="font-black text-4xl uppercase italic mb-2 tracking-tighter">{tier.tier}</h3>
                <p className="text-drp-silver font-bold text-[10px] tracking-widest uppercase mb-8">{tier.pts}</p>
                <ul className="space-y-4">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex gap-4 font-bold text-sm uppercase tracking-widest text-drp-cream/80">
                      <Star size={16} className="text-drp-cream shrink-0" /> {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
