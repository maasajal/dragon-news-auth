import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSideCard from "./LeftSideCard";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const categoriesData = async () => {
      const response = await fetch("./categories.json");
      const data = await response.json();
      setCategories(data);
    };
    categoriesData();
    const newsData = async () => {
      const response = await fetch("./news.json");
      const data = await response.json();
      setNews(data);
      console.log(data);
    };
    newsData();
  }, []);
  return (
    <div>
      <h2 className="text-lg font-semibold mb-5">All Category</h2>
      <div>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`category/${category.id}`}
            className="block btn-ghost w-full mb-1 py-3 pl-12 rounded-lg"
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div>
        {news.slice(0, 3).map((aNews) => (
          <LeftSideCard key={aNews._id} news={aNews} />
        ))}
      </div>
    </div>
  );
};
export default LeftSideNav;
