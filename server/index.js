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
import models from './db/models'
import {
    mergeTypes,
    fileLoader,
    mergeResolvers
} from 'merge-graphql-schemas'
import path from 'path'

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schemas')))
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))
const PORT = process.env.PORT || 3000
const endpointURL = '/graphql'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const app = express()
app.use(endpointURL, bodyParser.json(), graphqlExpress({
    schema,
    context: {
        models,
        User:{
            id:1
        }
    }
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