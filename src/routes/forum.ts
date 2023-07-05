import express from 'express'

const forumRouter = express.Router()
forumRouter.get('/', async (req, res) => {
  res.render('forums_page.ejs', { content: 'Hello World' })
})

export const forum = express
  .Router()
  .use(/^[/]$/, (_, res) => {
    // Редирект на основной дефолтный адрес - /forum
    res.redirect('/forum')
  })
  .use('/forum', forumRouter)
