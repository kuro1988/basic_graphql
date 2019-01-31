const express = require('express')
const port = 500
const graphqlHTTP = require('express-graphql')
const { GraphQLSchema } = require('graphql')

const { queryType } = require('./query.js')

const app = express()

// app.get('/hello', (req, res) => {
//   res.send('hello')
// })

const schema = new GraphQLSchema({ query: queryType })

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`App ready on port ${port}`)
})
