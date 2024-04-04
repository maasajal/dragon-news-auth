const LeftSideCard = ({ news }) => {
  const { image_url, title, author } = news;
  return (
    <div className="card w-full bg-base-100 mb-5 space-y-5">
      <figure>
        <img src={image_url} alt={title} />
      </figure>
      <div className="space-y-3">
        <h2 className="card-title">{title} </h2>
        <p> Sports {author.published_date} </p>
      </div>
    </div>
  );
};
export default LeftSideCard;
