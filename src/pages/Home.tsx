import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] w-full px-4 md:px-10 flex flex-col justify-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full max-w-7xl mx-auto w-full pt-12 md:pt-0">
          <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
            <h1 className="text-6xl md:text-[120px] lg:text-[140px] leading-[0.85] font-black uppercase tracking-tighter mb-6">
              23<br/><span className="text-drp-silver">FLAVORS</span><br/>ONE ICON.
            </h1>
            <p className="max-w-md text-lg leading-snug font-medium opacity-90 mb-8">
              Crafting the unique taste of rebellion since 1885. Dr Pepper is the original liquid legend for the flavor explorers.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link to="/perks" className="bg-drp-cream text-drp-burgundy px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl font-black uppercase tracking-tighter hover:scale-105 transition-transform">
                Join Pepper Perks
              </Link>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold tracking-widest opacity-60">Limited Drop</span>
                <span className="text-xl font-bold italic">Strawberry & Cream</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 relative flex items-center justify-center order-1 md:order-2 h-[400px] md:h-auto">
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-drp-cream/10 animate-pulse"></div>
            <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-drp-cream/5 blur-3xl"></div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-56 h-[400px] md:w-64 md:h-[500px] bg-gradient-to-b from-drp-burgundy to-drp-maroon rounded-3xl border-4 border-drp-silver/20 shadow-2xl flex flex-col items-center justify-center p-8 origin-bottom hover:scale-105 transition-transform duration-500"
            >
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black italic mb-2 tracking-tighter">DR</div>
                <div className="text-5xl md:text-6xl font-black italic mb-6 tracking-tighter">PEPPER</div>
                <div className="h-1 w-full bg-drp-cream mb-6 opacity-30"></div>
                <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">EST. 1885</div>
              </div>
              <div className="mt-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-dashed border-drp-cream/40 flex items-center justify-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-drp-cream rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="bg-transparent overflow-hidden py-8 border-y border-drp-cream/10 mt-12 md:mt-24">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            className="flex gap-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-drp-cream font-black text-6xl md:text-8xl uppercase tracking-tighter flex items-center gap-8 opacity-20 hover:opacity-100 transition-opacity">
                STRAWBERRIES & CREAM <Star className="fill-drp-cream w-8 h-8 md:w-12 md:h-12" />
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FLAVOR CAROUSEL TEASER */}
      <section className="py-24 px-4 md:px-10 w-full relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-[100px] leading-[0.8] font-black uppercase tracking-tighter text-drp-cream mb-8">
            EXPLORE<br/><span className="text-drp-maroon block mt-2" style={{ WebkitTextStroke: '2px #f5f5dc', color: 'transparent' }}>THE 23</span>
          </h2>
          <p className="max-w-2xl text-lg text-drp-cream/80 mb-16 font-medium">
            From the classic you love to our Zero Sugar and limited edition variations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { name: "Classic", desc: "The original 23 flavors.", bg: "from-drp-maroon to-black", accent: "border-white/10" },
              { name: "Zero Sugar", desc: "Zero sugar. All the flavor.", bg: "from-black to-zinc-900", accent: "border-drp-silver/30" },
              { name: "S&C", desc: "A smooth, fruity twist.", bg: "from-[#9B111E] to-[#71121c]", accent: "border-[#f5f5dc]/30" },
            ].map((flavor, i) => (
              <motion.div 
                key={flavor.name}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br ${flavor.bg} border-2 ${flavor.accent} p-8 min-h-[400px] flex flex-col justify-end text-left cursor-pointer relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                  <ArrowRight size={32} className="text-drp-cream" />
                </div>
                <h3 className="font-black text-5xl italic uppercase tracking-tighter mb-2 text-drp-cream">{flavor.name}</h3>
                <p className="font-bold text-xs uppercase tracking-widest text-drp-cream/60">{flavor.desc}</p>
              </motion.div>
            ))}
          </div>

          <Link to="/flavors" className="mt-16 bg-transparent border-2 border-drp-cream text-drp-cream px-10 py-5 text-lg font-black uppercase tracking-tighter hover:bg-drp-cream hover:text-drp-burgundy transition-colors">
            View All Flavors
          </Link>
        </div>
      </section>

      {/* PEPPER PERKS MODULE & STORE LOCATOR */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-t border-drp-cream/10">
        <div className="bg-transparent text-drp-cream p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-drp-cream/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-drp-maroon/50 blur-3xl -z-10"></div>
          <div className="text-xs uppercase font-bold tracking-widest opacity-60 mb-4">Rewards</div>
          <h2 className="text-6xl md:text-[80px] leading-[0.85] font-black uppercase tracking-tighter mb-8">
            PEPPER<br/>PERKS
          </h2>
          <p className="text-lg leading-snug font-medium opacity-90 max-w-sm mb-12">
            Buy Dr Pepper. Scan your receipts. Earn points for exclusive merch, experiences, and more.
          </p>
          <ul className="mb-10 space-y-6 font-bold text-sm tracking-widest uppercase">
            <li className="flex gap-4 items-center"><Star className="text-drp-silver" size={20}/> Exclusive Apparel</li>
            <li className="flex gap-4 items-center"><Star className="text-drp-silver" size={20}/> Event Tickets</li>
            <li className="flex gap-4 items-center"><Star className="text-drp-silver" size={20}/> Limited Drops</li>
          </ul>
          <div>
            <Link to="/perks" className="inline-block bg-drp-cream text-drp-burgundy px-10 py-5 text-xl font-black uppercase tracking-tighter hover:scale-105 transition-transform">
              Sign Up Now
            </Link>
          </div>
        </div>

        <div className="bg-black text-drp-cream p-12 md:p-24 flex flex-col justify-center items-start">
          <div className="text-xs uppercase font-bold tracking-widest text-drp-silver/60 mb-4">Availability</div>
          <h2 className="text-6xl md:text-[80px] leading-[0.85] font-black uppercase tracking-tighter mb-8 text-drp-silver">
            FIND IT<br/>NEAR YOU
          </h2>
          <p className="text-lg leading-snug font-medium opacity-80 mb-12 max-w-sm">
            Craving a Dr Pepper? Enter your zip code to find stores, gas stations, or fast delivery options nearby.
          </p>
          
          <div className="flex w-full max-w-md flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="ENTER ZIP CODE" 
              className="bg-transparent border-2 border-drp-silver/30 px-6 py-4 w-full text-drp-cream font-bold placeholder:text-drp-silver/40 focus:border-drp-cream outline-none uppercase tracking-widest text-sm"
            />
            <button className="bg-drp-silver text-black px-10 py-4 font-black uppercase tracking-tighter text-lg hover:bg-white transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
