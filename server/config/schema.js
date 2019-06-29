const graphql = require('graphql');
const comments = require('../models/comments');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} =  graphql;

const CommentType = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        id: { type: GraphQLID },
        content: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        comment: {
            type: CommentType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return comments
                    .findAll({
                        where:{id: args.id}
                    })
                    .then(list => {
                        return list
                    });
            }

        },
        comments: {
            type: new GraphQLList(CommentType),
            resolve() {
                return comments
                    .findAll()
                    .then(list => {
                        return list
                    });
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
   name:'Mutation',
    fields: {
       addComment: {
           type: CommentType,
           args: {
               id: { type: GraphQLID },
               content: {type: GraphQLString}
           },
           resolve(parent, args) {
              return comments
                   .create({id: args.id, content: args.content})
                   .then(list => {
                       return list
                   });
           }
       },
       deleteComment: {
           type: CommentType,
           args: {
               id: { type: GraphQLID }
           },
           resolve(parent, args) {
               return comments
                   .destroy({
                       where:{id: args.id}
                   })
                   .then(list => {
                       return list
                   });
           }
       }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

