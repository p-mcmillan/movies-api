import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

  await knex("movie").del();

  await knex("movie").insert([
    {
      Title: "Guardians of the Galaxy Vol. 2",
      Year: "2017",
      Rated: "PG-13",
      Runtime: "136 min",
      Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
      imdbRating: "7.6",
      imdbID: "tt3896198"
    },
    {
      Title: "Snatch",
      Year: "2000",
      Rated: "R",
      Runtime: "102 min",
      Plot: "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
      imdbRating: "8.2",
      imdbID: "tt0208092"

    }
  ]);
};
