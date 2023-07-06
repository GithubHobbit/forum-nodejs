// import { DataTypes } from 'sequelize'
// import { sequelize } from './data-source.js'
// const User = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// })

// const Topic = sequelize.define('User', {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// })

// const Forum = sequelize.define('Forum', {
//   title: {
//     type: DataTypes.CHAR(30),
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// })

// const Message = sequelize.define('Message', {
//   text: DataTypes.TEXT,
// })

// Forum.hasMany(Topic, {
//   onDelete: 'CASCADE',
// })
// Topic.belongsTo(Forum)

// User.hasMany(Topic, {
//   onDelete: 'RESTRICT',
// })
// Topic.belongsTo(User, {
//   foreignKey: 'author',
// })

// User.hasMany(Message, {
//   onDelete: 'RESTRICT',
// })
// Message.belongsTo(User, {
//   foreignKey: 'author',
// })

// Topic.hasMany(Message, {
//   onDelete: 'CASCADE',
// })
// Message.belongsTo(Topic)

// export { User, Forum, Topic, Message }
