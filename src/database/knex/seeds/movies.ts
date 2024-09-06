import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

  await knex("movie").del();

  await knex("movie").insert([
    {
      Title: "Guardians of the Galaxy Vol. 2",
      Year: "2017",
      Rated: "PG-13",
      Runtime: "136 min",
      Genre: "Action, Adventure, Comedy",
      Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
      Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
      Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      imdbRating: "7.6",
      imdbID: "tt3896198"
    },
    {
      Title: "Snatch",
      Year: "2000",
      Rated: "R",
      Runtime: "102 min",
      Genre: "Comedy, Crime",
      Actors: "Jason Statham, Brad Pitt, Stephen Graham",
      Plot: "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
      imdbRating: "8.2",
      imdbID: "tt0208092"

    }
  ]);
};
