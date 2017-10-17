export default {
    Mutation: {
        createMessage:async (parent, args, { models, User }, info) =>{
            try {
                await models.Message.create({...args, userId: User.id })
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }
}