'use strict';
var getEntityResolver = require('./util/entity-resolver');
var GraphQL = require('graphql');
var ClientType = require('./types/ClientType');
var MapEventType = require('./types/MapEventType');
var NotificationType = require('./types/NotificationType');
var ReportType = require('./types/ReportType');
var resolveMap = require('./resolve-map');
var types = require('./types');
var GraphQLObjectType = GraphQL.GraphQLObjectType;
var GraphQLSchema = GraphQL.GraphQLSchema;
var GraphQLNonNull = GraphQL.GraphQLNonNull;
var GraphQLInt = GraphQL.GraphQLInt;
var registerType = resolveMap.registerType;

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',

        fields: function getRootQueryFields() {
            return {
                client: {
                    type: ClientType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Client')
                },

                mapEvent: {
                    type: MapEventType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('MapEvent')
                },

                notification: {
                    type: NotificationType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Notification')
                },

                report: {
                    type: ReportType,

                    args: {
                        id: {
                            name: 'id',
                            type: new GraphQLNonNull(GraphQLInt)
                        }
                    },

                    resolve: getEntityResolver('Report')
                }
            };
        }
    })
});

module.exports = schema;
