import LikeButton from '../LikeButton/LikeButton';
import './MovieCard.css';

function MovieCard({item}) {
  return (
    <article className="movie-card">
      <button type="button" className="movie-card__poster-button" aria-label="Открыть страницу фильма">
        // тернанрный оператор здесь проверяет
        // если значение item.Poster равно "N/A" и это истина то
        // выдаётся сообщение о том что "постер отсутствует"
        // если же ложь то код выдаёт на страницу картинку постер 
        {item.Poster === "N/A" ? ("постер отсутствует") : (<img
          className="movie-card__poster"
          src={item.Poster} // значение постера (картинка)
          alt={item.Title} // версия для слабовидящих (текст)
        />)}
        <span className="movie-card__type">{item.Type}</span>
      </button>

      <div className="movie-card__like">
        <LikeButton />
      </div>

      <div className="movie-card__info">
        <h3 className="movie-card__title" title="Joker">{item.Title}</h3>
        <p className="movie-card__year">{item.Year}</p>
      </div>
    </article>
  );
}

export default MovieCard;
