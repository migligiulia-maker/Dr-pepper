import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-drp-burgundy text-drp-cream selection:bg-drp-cream selection:text-drp-burgundy relative font-sans overflow-x-hidden">
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none z-0"
        style={{ backgroundImage: "radial-gradient(#f5f5dc 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />
      <Navbar />
      <main className="flex-grow flex flex-col relative z-10 w-full pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
