const welcomePage = require('./request-handlers/welcome-page')
const traffyPage = require('./request-handlers/traffy-page')
const traffyFlatPage = require('./request-handlers/traffy-flat-page')

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
  },
  {
    path: '/traffy/flat',
    methods: ['get'],
    handler: traffyFlatPage
  }
]
