import "../NewsCard/NewsCard.css";

function NewsCard({ title, description, imageUrl }) {
  return (
    <li className="newsCard">
      <img
        className="card__image"
        src={imageUrl}
        alt={title}
      />
      <button
        type="button"
        className="save__button"
      ></button>

      <h3 className="card__title">{title}</h3>
      <p className="search__info">{description}</p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </a>
      <button
        className="show__more-button"
        type="submit"
      >
        Show more
      </button>
    </li>
  );
}
export default NewsCard;
