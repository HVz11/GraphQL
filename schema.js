export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
}
type Review{
    id: ID!
    rating: Int!
    content: String!
}
type Author{
    id: ID!
    name: String!
    verified: Boolean!
}
type Query{
    reviews: [Review]
    games: [Game]
    authors:[Author]
}

`;

// int, float, string, boolean, ID - these are 5 unique data types in graphql
// if we uses ! it means this field is required*
// query type is the entry point to the graph