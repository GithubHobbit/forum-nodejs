import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'bd.sqlite3',
  logging: false,
  define: {
    freezeTableName: true,
  },
})
