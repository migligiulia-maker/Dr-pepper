import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Flavors } from "./pages/Flavors";
import { Perks } from "./pages/Perks";
import { Locator } from "./pages/Locator";
import { Story } from "./pages/Story";
import { Merch } from "./pages/Merch";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="flavors" element={<Flavors />} />
        <Route path="perks" element={<Perks />} />
        <Route path="locator" element={<Locator />} />
        <Route path="story" element={<Story />} />
        <Route path="merch" element={<Merch />} />
        {/* Fallbacks for unfinished pages */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
