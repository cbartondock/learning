import express from 'express'
import graphQLHTTP from 'express-graphql'

import schema from './schema.js'

const app = express();
const PORT = 7600;

app.use('/graphql',graphQLHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(PORT, function() {
  console.log("Server is running on "+PORT)
});
