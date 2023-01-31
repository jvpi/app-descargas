const app = require('../app.js')
const port = process.env.PORT || 3000
app.set('puerto',port)
app.listen(app.get('puerto'))