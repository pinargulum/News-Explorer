import "../NewsCard/NewsCard.css";

function NewsCard({ title, description, urlToImage, publishedAt, source }) {
  return (
    <li className="card">
      <img
        className="card__image"
        src={urlToImage}
        alt={title}
      />
      <button
        type="button"
        className="archive__button"
      ></button>
      <div className="card__info">
      <h3 className="card__date">{publishedAt}</h3>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      </div>
      <p className="card__source">{source.name}</p>
     
    </li>
  );
}
export default NewsCard;
