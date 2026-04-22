import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-black py-16 px-6 md:px-10 border-t border-white/10 relative z-10 text-drp-cream">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex-1 flex flex-col sm:flex-row gap-12 items-start sm:items-center">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">Now Serving</span>
            <span className="font-bold text-drp-cream">Zero Sugar Cream Soda</span>
          </div>
          <div className="flex flex-col sm:border-l sm:border-white/20 sm:pl-12">
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">Loyalty Perks</span>
            <span className="font-bold text-drp-cream">+500 Points Today</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/locator" className="text-[10px] text-drp-cream font-black uppercase border border-white/30 px-3 py-1 hover:bg-white hover:text-black transition-colors">
            Retail Locator
          </Link>
          <Link to="/perks" className="text-[10px] text-drp-cream font-black uppercase border border-white/30 px-3 py-1 hover:bg-white hover:text-black transition-colors">
            SMS Signup
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Dr Pepper/Seven Up, Inc.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-drp-cream">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-drp-cream">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
