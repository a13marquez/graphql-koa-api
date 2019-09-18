const { GraphQLList } = require('graphql');
const gadgetGraphQLType = require('../types/gadgetType');
const Gadget = require('../../models/gadgets');

module.exports = {
  type: new GraphQLList(gadgetGraphQLType),
  args: { },
  resolve(parent, args) {
    return Gadget.find({});
  }
}