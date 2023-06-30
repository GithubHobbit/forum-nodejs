import { Sequelize } from 'sequelize'
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'bd.sqlite3',
  logging: false,
  define: {
    freezeTableName: true,
  },
})

export { sequelize }
