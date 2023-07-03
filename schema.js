export const typeDefs = `#graphql
type Game {
    id: ID!
    title: string!
    platform: [string!]!
}
type Review{
    id: ID!
    rating: int!
    content: string!
}
type Author{
    id: ID!
    name: string!
    verified: boolean!
}
type Query{
    reviews: [Review]
    games: [Game]
    authors:[Author]
}

`;

// int, float, string, boolean, ID - these are 5 unique data types in graphql
// if we uses ! it means this field is required*
// query type is the entry point for our graph