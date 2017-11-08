export default {
    Mutation: {
        createTeam: async (parent, args, { models, User }, info) =>{
            try {
                await models.Team.create({...args, owner: User.id})
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
            
    }
}