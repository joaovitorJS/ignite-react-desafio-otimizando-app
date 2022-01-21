import { memo } from 'react';
import { MovieCard } from './MovieCard';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  movies: Array<MovieProps>;
  selectedGenre: {
    title: string;
  }
}


function ContentComponent(props: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
      </header>

        <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard 
              key ={movie.imdbID} 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

const areEqual = (prevProps: Readonly<React.PropsWithChildren<ContentProps>>, nextProps: Readonly<React.PropsWithChildren<ContentProps>>) => {
  return Object.is(prevProps.movies, nextProps.movies);
}

export const Content = memo(ContentComponent, areEqual);