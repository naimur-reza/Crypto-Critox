import Banner from "./Components/Banner";
import CryptoMarket from "./Components/CryptoMarket";
import GetStart from "./Components/GetStart";
import Opportunities from "./Components/Opportunities";
import TrustedBy from "./Components/TrustedBy";
import Web3Products from "./Components/Web3Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Opportunities />
      <Web3Products />
      <CryptoMarket />
      <GetStart />
      <TrustedBy />
    </div>
  );
};

export default Home;
