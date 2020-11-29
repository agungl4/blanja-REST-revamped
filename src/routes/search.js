const express = require('express')

const searchRouter = express.Router()

const searchController = require('../controllers/search')

searchRouter.get('/', searchController.searchBy)

module.exports = searchRouter