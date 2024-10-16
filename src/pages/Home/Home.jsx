import Banner from "./Components/Banner";
import CryptoMarket from "./Components/CryptoMarket";
import GetStart from "./Components/GetStart";
import Opportunities from "./Components/Opportunities";
import TrustedBy from "./Components/TrustedBy";
import Web3Products from "./Components/Web3Products";
import NewsArticle from "./Components/NewsArticle";
import CryptoExchange from "./Components/CryptoExchange";
const Home = () => {
  return (
    <div>
      <Banner />
      <Opportunities />
      <Web3Products />
      <CryptoMarket />
      <GetStart />
      <CryptoExchange />
      <TrustedBy />
      <NewsArticle />
    </div>
  );
};

export default Home;
