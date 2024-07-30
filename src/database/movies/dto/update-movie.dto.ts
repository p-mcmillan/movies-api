import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsString, IsOptional, IsInt } from 'class-validator';

@InputType()
export class UpdateMovieDto extends PartialType(CreateMovieDto) {

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Year?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Rated?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Runtime?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  Plot?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  imdbRating?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  imdbID?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  likes?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  dislikes?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  created_at?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  updated_at?: string;
}
