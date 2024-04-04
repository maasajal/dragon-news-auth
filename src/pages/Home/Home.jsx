import { useEffect, useState } from "react";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import NewsCard from "./NewsCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <div className="text-center my-8">
        <Header />
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Dragon News Home</h2>
          <div>
            {news.map((aNews) => (
              <NewsCard key={aNews._id} news={aNews} />
            ))}
          </div>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};
export default Home;
