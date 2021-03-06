var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var MapEventType = new GraphQLObjectType({
    name: 'MapEvent',
    description: '@TODO DESCRIBE ME',

    fields: function getMapEventFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            latitude: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            longitude: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            status: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            clientId: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            client: {
                type: getType('Client'),
                description: '@TODO DESCRIBE ME (reference)',
                resolve: getEntityResolver('Client')
            },

            ts: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            mapEventsType: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(MapEventType);
module.exports = MapEventType;