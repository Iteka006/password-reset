const app = require('./app')

const server = app.listen(app.get('port'), () => {

  console.log(`${app.get('env')} server listening on port ${app.get('port')}`)
})


