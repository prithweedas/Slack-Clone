export default {
    Mutation: {
        createUser: (parent, args, { models }, info) =>  
            models.User.create(args)
    },
    Query: {
        getUser: (parent, {username}, {models}, info) =>
            models.User.findOne({where: {username}}),
        getAllUsers: (parent, args, {models}, info) =>
            models.User.findAll()
    }

}