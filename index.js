import express from 'express'
import bodyParser from 'body-parser'
import {
    graphqlExpress,
    graphiqlExpress
} from 'apollo-server-express'
import {
    makeExecutableSchema
} from 'graphql-tools'

const PORT = process.env.PORT || 3000

import typeDefs from './schema'
import resolvers from './resolvers'

const endpointURL = '/graphql'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const app = express()
app.use(endpointURL, bodyParser.json(), graphqlExpress({
    schema
}))

app.use('/graphiql',graphiqlExpress({
    endpointURL
}))

app.listen(PORT,(err)=>{
    if(err) throw err
    console.log("Server running on port 3000")
})