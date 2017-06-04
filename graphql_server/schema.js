import {
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'

import mysql from 'mysql';
import sqlite3 from 'sqlite3';
import {promisify, promisifyAll} from 'bluebird';

const dbParams = {
  host: "localhost",
  user: "jdoe",
  port: 3306,
  password: "jdoe_basswird",
  database: "jdoe"
}
const connection = mysql.createConnection(dbParams);
connection.connect(function (err) {
  if(!err) {
    console.log("Connection Successful!");
  } else {
    console.log(err);
  }
});
const db = promisifyAll(connection);
//connection.query = promisify(connection.query);


// const db = new sqlite3.Database('db.sqlite3');
// db.get = promisify(db.get);
// db.all = promisify(db.all);
// console.log(db.get);
// console.log(connection.query('SELECT * FROM clients WHERE id=1'));


const ReportType = new GraphQLObjectType({
  name: 'ReportType',
  description: 'JDoe Report',
  fields: {
    type: {type: GraphQLString},
    date: {type: GraphQLString}
  }
});

const ClientType = new GraphQLObjectType({
  name: 'ClientType',
  description: 'JDoe Client',
  fields: {
    first_name: {type: GraphQLString},
    last_name: {type: GraphQLString},
    email: { type: GraphQLString},
    id: { type: GraphQLInt }
    //    reports: {
    //   type: new GraphQLList(ReportType),
    //  resolve: async () => await connection.query('SELECT * FROM reports WHERE name'); 
    // }
  }
});



const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: {
    client: {
      type: ClientType,
      args: {
        login: {type: GraphQLString}
      },
      resolve(parent, {id}, ast) {
        return db.raw('SELECT * FROM clients WHERE id=?', id);
      }
      // resolve: (root, args, ast) => connection.query('SELECT * FROM clients WHERE id=1',
      //   function(err,res) {
      //     if(err) throw err;
      //     console.log(JSON.stringify(res));
      //   })
    }
  }
});

export default new GraphQLSchema({
  query: QueryType
});
