module.exports = ((req, res)=> {
  res.render('errors/404', {
    title: 404,
    message: 'В библиотеке нет книги с таким id.'
  })
})
