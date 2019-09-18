const { GraphQLObjectType } = require('graphql');

const queryAllGadgets = require('./queryAllgadgets');
const queryGadgetById = require('./queryGadgetById');

const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields: {
    queryAllGadgets,
  queryGadgetById,
  }
});

module.exports = RootQuery;