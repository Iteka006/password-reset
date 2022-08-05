const express = require('express')
const {createBook, getAllBooks, getOneBook, updateBook, deleteBook} = require('../controllers/books')
const {validateCreateBook} = require('../middlewares/validate')
const router = express.Router({mergeParams:true});


// app.use(':/bookId/reviews')


router.route('/:id').get(getOneBook).patch(updateBook).delete(deleteBook)
router.route('/').get(getAllBooks).post(validateCreateBook, createBook)



module.exports = router
