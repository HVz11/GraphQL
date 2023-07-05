export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
}
type Review{
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}
type Author{
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]!
}
type Query{
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors:[Author]
    author(id: ID!): Author
}

`;

// int, float, string, boolean, ID - these are 5 unique data types in graphql
// if we uses ! it means this field is required*
// query type is the entry point to the graph
