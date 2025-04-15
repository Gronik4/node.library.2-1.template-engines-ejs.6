module.exports = ((req, res)=> {
  res.render('error/404', {
    title: 404,
    message: 'Page on this url not found.'
  })
})
