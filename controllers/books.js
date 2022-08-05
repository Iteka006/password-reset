const Book = require('../models/books')
const {NotFound, BadRequest} = require('http-errors')
const asyncHandler = require('../middlewares/async')

const createBook = asyncHandler(async (req, res, next) => {
    const book = new Book(req.body)
    const newBook = await book.save()
    res.status(201).json({
        success:true, 
        data: newBook
    })
})

async function getAllBooks(req, res, next) {
    try{
    

    }catch(e){
        next(e)
    }

}

async function getOneBook (req, res, next) {
    try{
        if(!req.params.id) {
            throw new BadRequest('no id provided')
        }
        await Book.findOne({_id:req.params.id})
        const book = await Book.findById(req.params.id)
        if (!book){
            throw new NotFound('no book with id found')
        }
        res.status(200).json({
            success: true, 
            data: book
        })
    }catch(e){
        next(e)
    }
}

async function updateBook(req, res, next) {
    try{
        if(!req.params.id) {
            throw new BadRequest('id must be provided!')
        }
       let book = await Book.findById(req.params.id)
       if(!book) {
        throw new NotFound('no book with id exist')
       }
       book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true
       })
       res.status(200).json({
           success:true,
           data: book
       })

    }catch(e){
        next(e)
    }
}

async function deleteBook(req, res, next) {
    try{
    await Book.findByIdAndDelete(req.params.id)
       res.status(200).json({
           success:true,
           data: {}
       })

    }catch(e){
        next(e)
    }
}




module.exports = {
    createBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook
}