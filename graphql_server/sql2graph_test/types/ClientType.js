var getEntityResolver = require('../util/entity-resolver');
var resolveMap = require('../resolve-map');
var GraphQL = require('graphql');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLInt = GraphQL.GraphQLInt;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLString = GraphQL.GraphQLString;
var getType = resolveMap.getType;
var registerType = resolveMap.registerType;

var ClientType = new GraphQLObjectType({
    name: 'Client',
    description: '@TODO DESCRIBE ME',

    fields: function getClientFields() {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: '@TODO DESCRIBE ME'
            },

            firstName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            lastName: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            email: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            phone: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            deviceId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            token: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            passwordHash: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            encryptSalt: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mobileAppId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            mobileAppOs: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            facebookId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            twitterId: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            },

            birthday: {
                type: GraphQLInt,
                description: '@TODO DESCRIBE ME'
            },

            homeZipCode: {
                type: GraphQLString,
                description: '@TODO DESCRIBE ME'
            }
        };
    }
});

registerType(ClientType);
module.exports = ClientType;