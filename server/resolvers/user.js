export default {
    Mutation: {
        createUser: (parent, args, {
            models
        }, info) => {
            return models.User.create(args)
        }
    },
    Query: {
        getUser: (parent, {
            username
        }, {
            models
        }, info) => {
            return models.User.findOne({
                where: {
                    username
                }
            })
        },
        getAllUsers: (parent, args, {
            models
        }, info) => {
            return models.User.findAll()
        }
    }

}