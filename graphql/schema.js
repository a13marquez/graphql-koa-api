const { GraphQLSchema } = require('graphql');

const RootQuery = require('./query/rootQuery');
const Mutations = require('./mutations');



module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});