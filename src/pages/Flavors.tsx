import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";

const FLAVORS = [
  { id: 1, name: "Dr Pepper Classic", tag: "Classic", bg: "from-drp-maroon to-black", text: "text-drp-cream", desc: "The original 23 flavors blend.", accent: "border-white/10" },
  { id: 2, name: "Dr Pepper Zero Sugar", tag: "Zero Sugar", bg: "from-black to-zinc-900", text: "text-drp-cream", desc: "The same 23 flavors, zero sugar.", accent: "border-drp-silver/30" },
  { id: 3, name: "Diet Dr Pepper", tag: "Diet", bg: "from-white to-drp-silver", text: "text-drp-maroon", desc: "The original diet draft.", accent: "border-white" },
  { id: 4, name: "Strawberries & Cream", tag: "Flavors", bg: "from-[#9B111E] to-[#71121c]", text: "text-drp-cream", desc: "A sweet strawberry twist.", accent: "border-[#f5f5dc]/30" },
  { id: 5, name: "Cherry", tag: "Flavors", bg: "from-[#4a0b12] to-black", text: "text-white", desc: "A kiss of cherry.", accent: "border-[#9B111E]/50" },
  { id: 6, name: "Cream Soda", tag: "Flavors", bg: "from-[#F3E5AB] to-[#d4c381]", text: "text-drp-maroon", desc: "Smooth cream soda finish.", accent: "border-[#F3E5AB]" },
  { id: 7, name: "Cherry Vanilla", tag: "Flavors", bg: "from-drp-maroon to-[#F3E5AB]", text: "text-drp-cream", desc: "Cherry and vanilla perfectly mixed.", accent: "border-white/20" },
];

const CATEGORIES = ["All", "Classic", "Zero Sugar", "Diet", "Flavors"];

export function Flavors() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFlavors = FLAVORS.filter((f) => {
    const matchesCategory = activeCategory === "All" || f.tag === activeCategory;
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header */}
      <header className="text-drp-cream pt-16 md:pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h1 className="text-6xl md:text-[120px] leading-[0.85] font-black uppercase italic tracking-tighter">OUR<br/><span className="text-drp-silver">FLAVORS</span></h1>
            <p className="max-w-md text-lg font-medium text-drp-cream/80 mt-6">
              Explore the unmistakable 23 blend combinations.
            </p>
          </div>
          <div className="w-full md:w-auto relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
            <input 
              type="text"
              placeholder="SEARCH FLAVORS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-2 border-white/20 py-4 pl-12 pr-6 text-white w-full md:w-80 outline-none focus:border-white transition-all font-bold tracking-widest text-sm placeholder:text-white/50 uppercase"
            />
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="border-y border-white/10 sticky top-[88px] z-40 bg-drp-burgundy/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex gap-4 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 font-black uppercase tracking-tighter text-sm transition-colors border-2 ${
                activeCategory === cat 
                  ? "bg-drp-cream text-drp-burgundy border-drp-cream" 
                  : "bg-transparent text-drp-cream border-white/20 hover:border-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredFlavors.map((flavor) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={flavor.id}
                className={`bg-gradient-to-br ${flavor.bg} ${flavor.text} border-2 ${flavor.accent} p-8 min-h-[450px] shadow-2xl flex flex-col items-center justify-between group cursor-pointer`}
              >
                <div className="text-center w-full">
                  <span className="inline-block px-4 py-1 border border-current/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                    {flavor.tag}
                  </span>
                  <h3 className="font-black text-4xl md:text-5xl italic uppercase tracking-tighter leading-[0.9] mb-4">
                    {flavor.name}
                  </h3>
                  <p className="font-medium opacity-80 mb-8 max-w-[250px] mx-auto text-sm">{flavor.desc}</p>
                </div>
                
                {/* Simulated Can Area */}
                <div className="w-32 h-48 bg-black/10 mt-auto relative overflow-hidden group-hover:scale-105 transition-transform duration-500 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                   <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-black to-transparent" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
