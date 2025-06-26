import { Movie } from "./useProps.ts";

type LayoutProps = {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;
};

export const Layout = ({ title, movies = [], isLargeRow }: LayoutProps) => {
  const image_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="ml-5 text-white">
      <h2 className="mb-2 text-xl font-bold md:text-2xl">{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar-hide">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // `w-full`を削除し、固定幅`w-40`にすることで、複数の画像が横に並びます
            className={`object-contain m-2 w-40 transform cursor-pointer transition-transform duration-450 ${
              isLargeRow
                ? "max-h-60 hover:scale-110"
                : "max-h-24 hover:scale-108"
            }`}
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