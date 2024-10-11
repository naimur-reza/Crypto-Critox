import { Link } from "react-router-dom";
import assets from "../../assets";
import Button from "../Button";

const NotFound = () => {
  return (
    <div className="flex items-center flex-col ">
      <img src={assets.notFound} alt="404_notFound" />
      <h1 className="text-xl lg:text-2xl font-bold mb-3">Page Not Found</h1>
      <p className="text-gray-200 text-sm mb-6 lg:mb-8">
        The page you are looking for doesn&#39;t exist or has been moved
      </p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
