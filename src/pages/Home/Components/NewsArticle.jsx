import Button from "../../../components/Button";
import blogs from "../../../constant/blogs";

const NewsArticle = () => {
  return (
    <div>
      <div className="container py-100">
        <div className="flex items-center justify-between mb-10 xl:mb-[60px] ">
          <h1 className="title-head ">
            News & <span className="text-primary underline">Article</span>
          </h1>
          <Button>View More</Button>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {blogs.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "row-span-2 flex-col" : "lg:flex-row flex-col"
              } col-span-12 lg:col-span-6 bg-darkBlue flex gap-5 p-6 rounded-2xl items-center`}
            >
              <img
                src={item.image}
                className={`rounded-xl max-sm:w-full lg:w-auto ${
                  index === 0 ? "w-full" : "w-[260px]"
                }`}
                alt={item.title}
              />
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300 text-[15px] tracking-wide">
                  {item.description}
                </p>
                <Button
                  bg="white"
                  text="primary"
                  hover="text-white duration-200"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
