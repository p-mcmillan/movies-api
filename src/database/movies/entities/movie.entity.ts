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
  Plot: string;

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
