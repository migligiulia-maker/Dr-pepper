import { MapPin, Navigation, Phone } from "lucide-react";

export function Locator() {
  return (
    <div className="min-h-[calc(100vh-[112px])] bg-transparent flex flex-col md:flex-row text-drp-cream">
      {/* Sidebar with Search and Results */}
      <div className="w-full md:w-[450px] bg-drp-maroon border-r border-white/10 flex flex-col h-[calc(100vh-112px)] md:sticky md:top-28 z-20">
        <div className="p-8 border-b border-white/10 bg-transparent">
          <h1 className="font-black text-4xl md:text-5xl uppercase italic tracking-tighter text-drp-cream mb-2">
            WHERE TO BUY
          </h1>
          <p className="text-sm font-medium opacity-80 mb-6">
            Find Dr Pepper products in stores or order delivery.
          </p>
          <div className="relative">
            <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
            <input 
              type="text" 
              placeholder="ZIP CODE OR CITY" 
              defaultValue="75204"
              className="w-full bg-transparent border-2 border-white/20 px-4 py-3 pl-12 font-bold focus:border-white transition-colors outline-none tracking-widest text-sm placeholder:text-white/50 uppercase"
            />
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-4">
          {[
            { name: "Target", type: "Supermarket", address: "Target Cityplace", distance: "0.4 mi", instock: true },
            { name: "CVS Pharmacy", type: "Pharmacy", address: "Haskell Ave", distance: "0.8 mi", instock: true },
            { name: "7-Eleven", type: "Convenience", address: "Ross Ave", distance: "1.1 mi", instock: true },
            { name: "Kroger", type: "Grocery", address: "City Center", distance: "2.3 mi", instock: false },
          ].map((store, i) => (
            <div key={i} className="bg-transparent border-2 border-white/10 p-6 hover:border-drp-cream transition-colors cursor-pointer group hover:bg-white/5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-black text-2xl uppercase tracking-tighter text-drp-cream opacity-90 group-hover:opacity-100">{store.name}</h3>
                  <p className="text-[10px] font-bold text-drp-silver/60 uppercase tracking-widest mt-1">{store.type}</p>
                </div>
                <span className="text-[10px] font-bold border border-white/20 px-2 py-1 tracking-widest text-drp-cream">{store.distance}</span>
              </div>
              <p className="text-sm opacity-80 flex items-center gap-2 mb-6 mt-4">
                <MapPin size={16} className="text-drp-silver" /> {store.address}
              </p>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-drp-cream text-drp-burgundy font-black text-xs uppercase tracking-tighter py-3 hover:bg-white transition-colors">
                  Directions
                </button>
                <button className="p-3 border-2 border-white/20 text-drp-cream hover:bg-drp-cream hover:text-drp-burgundy transition-colors hover:border-drp-cream">
                  <Phone size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 bg-black relative min-h-[400px]">
        {/* Placeholder for actual Google Maps / Mapbox embed */}
        <div className="absolute inset-0 flex items-center justify-center opacity-80 grayscale contrast-125" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="absolute inset-0 bg-drp-burgundy/40" />
            <div className="relative z-10 bg-black/80 backdrop-blur-md p-8 border border-white/20 shadow-2xl text-center max-w-sm">
                <MapPin size={40} className="mx-auto text-drp-cream mb-4" />
                <h3 className="font-black uppercase tracking-tighter text-3xl mb-2 text-drp-cream">Interactive Map</h3>
                <p className="text-sm font-medium text-drp-silver/70 tracking-wide">Map integration would render here with custom markers for Dr Pepper availability.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
