import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

// orm equivalent of postgres table
// => creates a new table in the db when none is present
@Entity("places")
@ObjectType()
export class Place extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  imgSrc: string;

  @Column()
  @Field()
  description: string;
}
