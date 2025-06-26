import { Movie } from "./useProps.ts";

type LayoutProps = {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;
};

export const Layout = ({ title, movies, isLargeRow }: LayoutProps) => {
  const image_url = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {movies.map((movie) => (
                                // ①DOM表示にmapを使う際はkeyを必ず設定する
          <img
            key={movie.id}
                                // ②使用する画像を使い分ける
            src={`${image_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};