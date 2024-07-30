import { Injectable, Inject } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Knex } from 'knex';
import { KNEX_CONNECTION } from '../knex/providers/knex.provider';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @Inject(KNEX_CONNECTION)
    private readonly knex: Knex,
  ) {}
  async createMovie(createMovieInput: CreateMovieDto): Promise<Movie> {
    const [newMovie] = await this.knex('movie')
      .insert(createMovieInput)
      .returning('*');
    return newMovie;
  }

  async listAllMovies(): Promise<Movie[]> {
    return this.knex('movie').select('*');
  }

  async getMovieByTitle(title: string): Promise<Movie> {
    return this.knex('movie').where({ Title: title }).first();
  }
  // pulls movie from db and upsert into cloud db
  async upsertMovieLocalDB(movie: Movie): Promise<void> {
    await this.knex('movie').insert(movie).onConflict('imdbID').merge();
  }

  //update movie
  async updateMovie(
    imdbID: string,
    updateMovieInput: UpdateMovieDto,
  ): Promise<Movie> {
    const updatedFields = {};

    for (const key in updateMovieInput) {
      if (updateMovieInput[key] !== undefined) {
        updatedFields[key] = updateMovieInput[key];
      }
    }

    await this.knex('movie').where({ imdbID }).update(updatedFields);
    return this.knex('movie').where({ imdbID }).first();
  }

  async deleteMovie(imdbID: string): Promise<void> {
    await this.knex('movie').where({ imdbID }).del();
  }

  // liker function
  async updateLikeDislike(imdbID: string, isLike: boolean): Promise<boolean> {
    try {
      const fieldToUpdate = isLike ? 'likes' : 'dislikes';

      //liker incremented
      await this.knex('movie').where({ imdbID }).increment(fieldToUpdate, 1);

      return true;
    } catch (error) {
      console.error('Failed to update movie reaction:', error);
      return false;
    }
  }
}
