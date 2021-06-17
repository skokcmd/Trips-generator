import { Place } from "../entity/Place";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class PlaceResolver {
  // this would be mutation to add a new place throught admin panel ... gonna implement it with login
  // @Mutation(() => String)
  // addPlace(
  //   @Arg("name") name: string,
  //   @Arg("imgSrc") imgSrc: string,
  //   @Arg("description") description: string
  // ) {
  //   try {
  //     Place.insert({ name, imgSrc, description });
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  //   return "Misto pridano";
  // }

  /**
   * Query to return all places
   * @return Array of Places
   */
  @Query(() => [Place])
  places() {
    return Place.find();
  }

  /**
   * Query that returns a single place
   * @param placeId id of the certain place
   * @return Place
   */
  @Query(() => Place)
  singlePlace(@Arg("placeId") placeId: number) {
    return Place.findOne({ where: { id: placeId } });
  }
}
