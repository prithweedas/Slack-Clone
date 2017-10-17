export default {
    Mutation: {
        createTeam: (parent, args, { models, User }, info) =>
            models.Team.create({...args, owner: User.id})
    }
}