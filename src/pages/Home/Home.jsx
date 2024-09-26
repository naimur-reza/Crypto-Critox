import Banner from "./Components/Banner";
import CryptoMarket from "./Components/CryptoMarket";
import Opportunities from "./Components/Opportunities";
import Web3Products from "./Components/Web3Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Opportunities />
      <Web3Products />
      <CryptoMarket />
    </div>
  );
};

export default Home;
