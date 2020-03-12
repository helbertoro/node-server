const express = require('express')
const ApiServices = require('../services/api')
const router = express.Router()

const ApiService = new ApiServices()

router.post('/', async (req, res, next) => {
  /* const { body } = req */
  console.log(req.body)

  try {
    const data = await ApiService.getData()

    res.status(201).json({
      data: data
    })
  } catch (err) {
    next(err)
  }

})

module.exports = router
