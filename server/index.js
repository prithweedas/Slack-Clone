import express from 'express'
import bodyParser from 'body-parser'
import {
    graphqlExpress,
    graphiqlExpress
} from 'apollo-server-express'
import {
    makeExecutableSchema
} from 'graphql-tools'
import connection from './db'
import typeDefs from './schemas/schema'
import resolvers from './resolvers/resolvers'
import models from './db/models'

const PORT = process.env.PORT || 3000
const endpointURL = '/graphql'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const app = express()
app.use(endpointURL, bodyParser.json(), graphqlExpress({
    schema
}))

app.use('/graphiql', graphiqlExpress({
    endpointURL
}))

connection.sync({}).then(() => {
    app.listen(PORT, (err) => {
        if (err) throw err
        console.log("Server running on port 3000")
    })
})