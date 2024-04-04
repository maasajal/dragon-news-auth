import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const newsDetail = news.find((aNews) => aNews._id === id);
  const { _id, title } = newsDetail;
  return (
    <div>
      <div className="my-8">
        <Header />
        <Navbar />
      </div>
      <h2>{title} </h2>
      <h2>
        Details {id} {_id}{" "}
      </h2>
    </div>
  );
};
export default NewsDetails;
