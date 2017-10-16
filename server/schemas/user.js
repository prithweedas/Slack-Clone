export default `
    type User {
        id: Int!
        username: String!
        email: String!
        teams: [Team!]!
    }
    type Mutation{
        createUser(username: String!, email: String!, password: String!): User!
    }
    type Query{
        getUser(username: String!): User!
        getAllUsers: [User!]!
    }
`