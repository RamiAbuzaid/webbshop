const express = require('express')
const app = express()
const port = 3000

app.get('/products', (req, res) => {
  res.send('Fetch all products')
})
app.get('/products/productsId', (req, res) => {
    console.log(reg.params.productId)
    res.send('Fetch specific products with ID:' + reg.params.productId)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})