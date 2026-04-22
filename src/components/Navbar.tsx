import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { name: "Flavors", path: "/flavors" },
  { name: "Pepper Perks", path: "/perks" },
  { name: "Merch", path: "/merch" },
  { name: "Story", path: "/story" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6 md:py-8 border-b border-drp-cream/10 bg-drp-burgundy/90 backdrop-blur-sm shadow-sm text-drp-cream">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-black tracking-tighter italic">
          DR PEPPER
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn("hover:text-white transition-colors", location.pathname === link.path && "underline underline-offset-4")}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/locator"
            className={cn("hover:text-white transition-colors", location.pathname === "/locator" && "underline underline-offset-4")}
          >
            Where to Buy
          </Link>
        </div>

        {/* Actions */}
        <div className="hidden md:block">
          <Link
            to="/perks"
            className="bg-drp-cream text-drp-burgundy px-6 py-2 text-xs font-black uppercase tracking-tighter hover:bg-white transition-colors"
          >
            Find Flavor
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-drp-cream"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-drp-maroon absolute top-full left-0 w-full border-b border-drp-cream/10"
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-widest text-drp-cream"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/locator"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold uppercase tracking-widest text-drp-cream flex items-center gap-2"
          >
            <MapPin size={20} />
            Where to Buy
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
