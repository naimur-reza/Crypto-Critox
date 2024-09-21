import Banner from "./components/Banner";
import Opportunities from "./components/Opportunities";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Banner />
      <Opportunities />
    </div>
  );
};

export default App;
