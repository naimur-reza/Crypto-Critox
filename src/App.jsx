import Banner from "./components/Banner";
import Opportunities from "./components/Opportunities";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Banner />
      <Opportunities />
      <Analytics />
    </div>
  );
};

export default App;
