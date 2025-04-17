import "./SavedNews.css";
import CurrentUserContext from "../utils/contexts/CurrentUserContext";

import { useContext } from "react";

function SavedNews({ savedArticles }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="saved__news">
      <div className="saved__news-info">
        <h2 className="saved__news-title">Saved articles</h2>
        <p className="saved__news-text">{currentUser}, you have 5 saved articles</p>
        <p className="saved__news-keyword">
          By keywords:
        </p>
      </div>
      <ul className="saved__articles-list">
        {savedArticles.map((article) => (
          
         <li className="card" key={article.id}>
         <img
           className="card__image"
           src={article.urlToImage}
           alt={article.title}
         />
         <p className="image__text">{article.keyword}</p>
         
        
         <button
           
           type="button"
           className="delete__button"
         ></button>
     
         <div className="card__info">
           <h3 className="card__date">{article.publishedAt}</h3>
           <h3 className="card__title">{article.title}</h3>
           <p className="card__description">{article.description}</p>
         </div>
         <p className="card__source">{article.source?.name || article.source}</p>
       </li>
        ))}
      </ul>
    </div>
  );
}
export default SavedNews;
