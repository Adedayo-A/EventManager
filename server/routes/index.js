const controllers = require('../controller/index')
module.exports = (app) => {
  app.post('/api/v1/centers', controllers.addCenter)
  app.post('/api/v1/events', controllers.addEvent)
  app.get('/api/v1/centers', controllers.getCenter)
  app.get('/api/v1/events', controllers.listEvent)
  app.put('/api/v1/events/:id', controllers.modifyEvent)
  app.put('/api/v1/centers/:id', controllers.modifyCenter)
  app.delete('/api/v1/events/:id', controllers.deleteEvent)
}