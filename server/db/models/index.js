import sequelize from './../index'

const models = {
    User: sequelize.import('./users.js'),
    Channel: sequelize.import('./channel.js'),
    Team: sequelize.import('./team.js'),
    Message: sequelize.import('./messages.js')
}

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models)
    }
})

// models.sequelize = sequelize
// models.Sequelize = Sequelize

export default models