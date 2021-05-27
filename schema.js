const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

//Hardcoded Data
const customer = [
    { id: '1', name: 'John Doe', email: 'jdoe@gmail.com', age: 35 },
    { id: '2', name: 'Edi Smith', email: 'edi@gmail.com', age: 25 },
    { id: '3', name: 'Angelina Smith', email: 'smith@gmail.com', age: 28 }
]

//Customer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});

//Root Query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: {
            type: CustomerType,
            args: {
                id: {type:GraphQLString }
            },
            resolve(parentVale, args) {
                for (let i = 0; i < customers.length; i++) {
                    if (customers[i].id === args.id) {
                        return customers[i];
                    }
                }

            }
        },
        customers:{
            type:new GraphQLList(CustomerType),
            resolve(parentValue, args){
                return customers;
            }
        }

    }

});

module.exports = new GraphQLSchema({
    query: RootQuery
});