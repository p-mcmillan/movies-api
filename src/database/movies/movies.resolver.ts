import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const apikey = process.env.OMDB_API_KEY;

//https://docs.nestjs.com/recipes/crud-generator

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Mutation(() => Movie)
  async createMovie(
    @Args('createMovieInput') createMovieInput: CreateMovieDto,
  ): Promise<Movie> {
    // Generate a random imdbID if not provided
    if (!createMovieInput.imdbID) {
      createMovieInput.imdbID = this.generateRandomImdbID();
    }

    return this.moviesService.createMovie(createMovieInput);
  }
  //https://stackoverflow.com/questions/13730861/why-cant-i-declare-local-variables-and-functions-within-a-typescript-class
  private generateRandomImdbID(): string {
    // generate random number to sorta match imdbID from the OMDB API
    const randomNumber = Math.floor(10000000000 + Math.random() * 90000000000);
    return `tt${randomNumber}`;
  }

  @Query(() => [Movie])
  async listAllMovies(): Promise<Movie[]> {
    return this.moviesService.listAllMovies();
  }

  @Query(() => Movie, { nullable: true })
  async getMovieByTitle(@Args('title') title: string): Promise<Movie> {
    let movie = await this.moviesService.getMovieByTitle(title);

    if (!movie) {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`,
        );

        const data = response.data;

        const movieData = {
          Title: data.Title,
          Year: data.Year,
          Rated: data.Rated,
          Runtime: data.Runtime,
          Plot: data.Plot,
          imdbRating: data.imdbRating,
          imdbID: data.imdbID,
          likes: 0,
          dislikes: 0,
        };

        await this.moviesService.upsertMovieLocalDB(movieData);

        movie = await this.moviesService.getMovieByTitle(title);
      } catch (error) {
        console.error('Error fetching or saving movie data:', error.message);
        throw new Error('Failed to fetch movie data');
      }
    }

    return movie;
  }

  @Mutation(() => Movie, { nullable: true })
  async updateMovie(
    @Args('imdbID') imdbID: string,
    @Args('updateMovieInput') updateMovieInput: UpdateMovieDto,
  ): Promise<Movie> {
    return this.moviesService.updateMovie(imdbID, updateMovieInput);
  }

  @Mutation(() => Boolean)
  async deleteMovie(@Args('imdbID') imdbID: string): Promise<boolean> {
    await this.moviesService.deleteMovie(imdbID);
    return true;
  }

  @Mutation(() => Boolean)
  async updateLikeDislike(
    @Args('imdbID') imdbID: string,
    @Args('isLike') isLike: boolean,
  ): Promise<boolean> {
    return this.moviesService.updateLikeDislike(imdbID, isLike);
  }
}
