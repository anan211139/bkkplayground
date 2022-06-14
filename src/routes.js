const welcomePage = require('./request-handlers/welcome-page')
const traffyPage = require('./request-handlers/traffy-page')

module.exports = [
  {
    path: '/',
    methods: ['get'],
    handler: welcomePage
  },
  {
    path: '/traffy',
    methods: ['get'],
    handler: traffyPage
  }
]
