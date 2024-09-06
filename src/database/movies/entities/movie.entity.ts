import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Movie {

  @Field()
  Title: string;

  @Field()
  Year: string;

  @Field()
  Rated: string;

  @Field()
  Runtime: string;

  @Field()
  Genre: string; //added

  @Field()
  Actors: string; //added

  @Field()
  Plot: string;

  @Field()
  Poster: string; //added

  @Field()
  imdbRating: string;

  @Field()
  imdbID: string;

  @Field(() => Int)
  likes: number;

  @Field(() => Int)
  dislikes: number;

  @Field(() => String, { nullable: true })
  created_at?: Date;

  @Field(() => String, { nullable: true })
  updated_at?: Date;
}
