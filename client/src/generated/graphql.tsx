import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['Float'];
  name: Scalars['String'];
  imgSrc: Scalars['String'];
  description: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  places: Array<Place>;
  singlePlace: Place;
};


export type QuerySinglePlaceArgs = {
  placeId: Scalars['Float'];
};

export type SinglePlaceQueryVariables = Exact<{
  placeId: Scalars['Float'];
}>;


export type SinglePlaceQuery = (
  { __typename?: 'Query' }
  & { singlePlace: (
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'name' | 'imgSrc' | 'description'>
  ) }
);

export type PlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type PlacesQuery = (
  { __typename?: 'Query' }
  & { places: Array<(
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'name' | 'imgSrc' | 'description'>
  )> }
);


export const SinglePlaceDocument = gql`
    query SinglePlace($placeId: Float!) {
  singlePlace(placeId: $placeId) {
    id
    name
    imgSrc
    description
  }
}
    `;

/**
 * __useSinglePlaceQuery__
 *
 * To run a query within a React component, call `useSinglePlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useSinglePlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSinglePlaceQuery({
 *   variables: {
 *      placeId: // value for 'placeId'
 *   },
 * });
 */
export function useSinglePlaceQuery(baseOptions: Apollo.QueryHookOptions<SinglePlaceQuery, SinglePlaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SinglePlaceQuery, SinglePlaceQueryVariables>(SinglePlaceDocument, options);
      }
export function useSinglePlaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SinglePlaceQuery, SinglePlaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SinglePlaceQuery, SinglePlaceQueryVariables>(SinglePlaceDocument, options);
        }
export type SinglePlaceQueryHookResult = ReturnType<typeof useSinglePlaceQuery>;
export type SinglePlaceLazyQueryHookResult = ReturnType<typeof useSinglePlaceLazyQuery>;
export type SinglePlaceQueryResult = Apollo.QueryResult<SinglePlaceQuery, SinglePlaceQueryVariables>;
export const PlacesDocument = gql`
    query Places {
  places {
    id
    name
    imgSrc
    description
  }
}
    `;

/**
 * __usePlacesQuery__
 *
 * To run a query within a React component, call `usePlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlacesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlacesQuery(baseOptions?: Apollo.QueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, options);
      }
export function usePlacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlacesQuery, PlacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlacesQuery, PlacesQueryVariables>(PlacesDocument, options);
        }
export type PlacesQueryHookResult = ReturnType<typeof usePlacesQuery>;
export type PlacesLazyQueryHookResult = ReturnType<typeof usePlacesLazyQuery>;
export type PlacesQueryResult = Apollo.QueryResult<PlacesQuery, PlacesQueryVariables>;