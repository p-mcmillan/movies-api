import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.createMovie(createMovieDto);
  }

  @Get()
  listAllMovies() {
    return this.moviesService.listAllMovies();
  }

  @Get(':imdbID')
  getMovieByTitle(@Param('Title') Title: string) {
    return this.moviesService.getMovieByTitle(Title);
  }

  @Patch(':imdbID')
  updateMovie(@Param('imdbID') imdbID: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.updateMovie(imdbID, updateMovieDto);
  }

  @Delete(':imdbID')
  deleteMovie(@Param('imdbID') imdbID: string) {
    return this.moviesService.deleteMovie(imdbID);
  }
  @Patch(':imdbID')
  updateLikeDislike(
    @Param('imdbID') imdbID: string,
    @Body('isLike') isLike: boolean
  ) {
    return this.moviesService.updateLikeDislike(imdbID, isLike);
  }
}
