const express = require('express')
const chatRouter = express.Router()
const chatController = require('./../controllers/chat')
const checkToken = require ('./../helpers/middlewares/verifyToken')

chatRouter.post('/addMessage', chatController.addNewMessage)
chatRouter.get('/chatroomSeller', checkToken.isLogin, chatController.getListChatSeller)
chatRouter.get('/chatroomBuyer', checkToken.isLogin, chatController.getListChatBuyer)
chatRouter.get('/newMessage/:chatRoom', chatController.getNewMessage )

module.exports = chatRouter 