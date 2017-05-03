let connection = require('./sequelize-connection')
let Sequelize = require('sequelize')

let country = connection.define('country',{
  code: {
    type: Sequelize.STRING,
    field: 'code'
  },
  name: {
    type: Sequelize.STRING,
    field: 'name'
  },
  continent: {
    type: Sequelize.STRING,
    field: 'continent'
  },
  region: {
    type: Sequelize.STRING,
    field: 'region'
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at'
  }
})

module.exports = country
