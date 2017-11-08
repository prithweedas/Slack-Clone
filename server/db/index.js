import Sequelize from "sequelize"


export default new Sequelize("slack", "postgres", "prithweedas", {
  host: "localhost",
  dialect: "postgres",
  underscored: true
})