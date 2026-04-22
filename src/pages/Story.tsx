import { motion } from "motion/react";

export function Story() {
  return (
    <div className="bg-transparent text-drp-cream min-h-[calc(100vh-112px)] border-t border-white/10">
      <header className="py-32 px-6 md:px-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-drp-maroon/20 blur-3xl -z-10"></div>
        <h1 className="text-6xl md:text-[120px] leading-[0.85] font-black uppercase italic tracking-tighter text-drp-cream mb-8">
          THE ORIGINAL<br/><span className="text-drp-silver">BEING ORIGINAL.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl font-medium opacity-90 leading-snug">
          Created in 1885 in Waco, Texas, Dr Pepper is the oldest major soft drink in the United States.
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 space-y-32">
        {[
          { 
            year: "1885", 
            title: "The Birth of a Legend", 
            desc: "Charles Alderton, a young pharmacist in Waco, Texas, invents the unique 23-flavor blend because he wanted a drink that tasted how the pharmacy smelled."
          },
          { 
            year: "1904", 
            title: "World's Fair Debut", 
            desc: "Dr Pepper is introduced to almost 20 million people at the 1904 World's Fair Exposition in St. Louis."
          },
          { 
            year: "1950s", 
            title: "10, 2, and 4", 
            desc: "The famous '10, 2, and 4' campaign encourages people to drink Dr Pepper for an energy boost at 10:30 AM, 2:30 PM, and 4:30 PM."
          },
          { 
            year: "Today", 
            title: "The One You Crave", 
            desc: "Dr Pepper continues to innovate with new flavors, remaining a uniquely beloved brand with fans across the globe."
          }
        ].map((era, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
          >
            <div className="font-black text-6xl md:text-[80px] leading-none text-drp-maroon uppercase tracking-tighter w-full md:w-64 shrink-0" style={{ WebkitTextStroke: '2px #f5f5dc', color: 'transparent' }}>
              {era.year}
            </div>
            <div>
              <h3 className="font-black text-4xl uppercase italic text-drp-cream mb-6 tracking-tighter">{era.title}</h3>
              <p className="text-xl font-medium opacity-80 leading-relaxed border-l-4 border-white/20 pl-8 py-2">
                {era.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
