export default {
    Mutation: {
        createChannel:async (parent, args, { models, User }, info) =>{
            try {
                await models.Channel.create({...args, userId: User.id })
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }
}