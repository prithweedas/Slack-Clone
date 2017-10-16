import sequelize from './../index'

const models = {
    User: sequelize.import(__dirname+'/users.js'),
    Channel: sequelize.import(__dirname+'/channel.js'),
    Team: sequelize.import(__dirname+'/team.js'),
    Message: sequelize.import(__dirname+'/messages.js')
}

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models)
    }
})

// models.sequelize = sequelize
// models.Sequelize = Sequelize

export default models