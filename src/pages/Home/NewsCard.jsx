import {
  FaBookmark,
  FaChevronCircleDown,
  FaEye,
  FaShareAlt,
  FaStreetView,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    _id,
    image_url,
    title,
    author,
    others_info,
    rating,
    total_view,
    thumbnail_url,
    details,
  } = news;
  return (
    <div className="card w-full bg-base-100  mb-8">
      <div className="flex items-center p-5 justify-between bg-[#F3F3F3] rounded-t-lg">
        <div className="flex items-center gap-4">
          <img src={author.img} alt="" className="w-12 rounded-full" />
          <div>
            <h3>{author.name} </h3>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>
      <div className="border-x border-b rounded-b-lg p-5">
        <h2 className="text-lg font-bold leading-8 my-4">{title}</h2>
        <img src={image_url} alt={title} className="mb-6" />
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            {"..."} <br />
            <Link to={`/news/${_id}`} className="text-[#FF8C47]">
              Read More
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}

        <hr className="my-5" />
        <div className="flex items-center justify-between">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <p className="ml-4">{rating.number} </p>
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
