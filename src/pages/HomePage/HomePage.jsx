import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader'
import { useState } from 'react'
import './HomePage.css';

function HomePage() {
const [movies, setMovies] = useState([]);

const [load, setLoad] = useState(false);

const [error, setError] = useState(null);

const [querry, setQuerry] = useState(''); // useState(''*('вот эти ковычки' - означают что изначальное значение
// Querry = пустой строке)*)

const [loader, setLoader] = useState('')

const [errorMessage, setErrorMessage] = useState('')




async function handlesearch(){
  // обнуление старого значения ошибки
  // тоесть если мы ввели неправильное название фильма первый раз
  // оно выводит ошибку, затем мы ищем второй раз
  // без setError(null) запрос снова выведет ошибку
  // а с setError(null) ошибка обнуляется и не выведется снова (ну всмысле при втором запросе ошибка не останется от первого запроса)
  setError(null)
  //включаем флаг загрузки: пока идёт запрос — на экране "Загрузка..."
  // (сам текст рисуется в JSX через {load && ...})
  setLoad(true)
  // await = предлагает функции остановится и подождать fetch, пока он не закончит своё действие
  const req = await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_KEY}&s={querry}`);
  const DataJson = req.json()
  try {
  if (DataJson.Peaponse === 'false')
    {
    setError(DataJson.Error);
    }
    else {
    setMovies(DataJson.Search);
    }
    // Response, Search, Error — это поля, которые присылает сервер OMDB в ответе
  } catch (errors)
  {
    setError('Ошибка, повторите оплату')
  }
  finally
  {
  setLoad(false)
  }
  
}

  return (
    <main className="home-page">
      <div className="container home-page__inner">
        <SearchBar querry={querry} onSubmit={handlesearch}/>
        <section className="home-page__section">
          <h2 className="home-page__section-title">Результат поиска</h2>
          // тернанрный оператор заместо MovieList
          load ? (<Loader />) : error ? (<ErrorMessage />) : (<MovieList />)
        </section>
      </div>
    </main>
  );
}

export default HomePage;



