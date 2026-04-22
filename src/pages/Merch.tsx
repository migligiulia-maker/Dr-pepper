import { ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

export function Merch() {
  return (
    <div className="bg-transparent text-drp-cream min-h-[calc(100vh-112px)]">
      <header className="bg-transparent border-b border-white/10 py-24 px-6 md:px-10 text-center">
        <h1 className="text-6xl md:text-[120px] leading-[0.85] font-black uppercase italic tracking-tighter text-drp-cream mb-6">
          MERCH<br/><span className="text-drp-silver">STORE</span>
        </h1>
        <p className="opacity-90 max-w-md mx-auto text-xl font-medium">Wear your 23 flavors proudly.</p>
      </header>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Classic Logo Tee", price: "$25", category: "Apparel" },
            { name: "Retro Trucker Hat", price: "$20", category: "Accessories" },
            { name: "Zero Sugar Hoodie", price: "$45", category: "Apparel" },
            { name: "Mini Fridge", price: "$85", category: "Equipment" },
            { name: "Collectible Glass", price: "$12", category: "Drinkware" },
            { name: "Vintage Posters", price: "$18", category: "Art" },
            { name: "Can Cooler", price: "$8", category: "Accessories" },
            { name: "Premium Socks", price: "$15", category: "Apparel" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-transparent p-6 border-2 border-white/10 hover:border-drp-cream transition-colors group cursor-pointer flex flex-col hover:bg-drp-maroon/20"
            >
              <div className="bg-white/5 border border-white/10 aspect-square rounded-none mb-6 flex items-center justify-center relative overflow-hidden">
                {/* Mock Image Area */}
                <div className="font-black italic text-drp-silver/10 text-5xl rotate-12 tracking-tighter">MERCH</div>
                <div className="absolute inset-0 bg-drp-burgundy/0 group-hover:bg-drp-burgundy/20 transition-colors" />
                <button className="absolute bottom-4 right-4 bg-drp-cream text-drp-burgundy p-4 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 shadow-xl">
                  <ShoppingBag size={24} />
                </button>
              </div>
              <p className="text-[10px] font-bold text-drp-silver/60 uppercase tracking-widest mb-2">{item.category}</p>
              <h3 className="font-black text-2xl text-drp-cream mb-2 leading-none uppercase tracking-tighter">{item.name}</h3>
              <p className="font-bold text-lg text-drp-silver">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
