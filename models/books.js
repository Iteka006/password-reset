const mongoose = require('mongoose')
const slugify = require('slugify')


const BookSchema = new mongoose.Schema({
    title: {
        type: String, 
        trim: true,
        required: [true, 'book name must be provided']
    },

    available: {
        type: Boolean, 
        default: true

    },

    author: {
        type: [String], 
        required: [true, 'author name must be provided']
    }, 

    isbn: {
        type:String,
        required: true
    }, 

    category: {
        type: [String]
    },

    initialCopies: {
        type: Number,
        default: 1
    }, 

    currentCopies : {
        type: Number,
        default: 1
    },

    edition: {
        type: Number,
        default: 1
    },
    
    publisher: {
        type: String
    },

    language: String,

    coverPage: String,

    metadata: {
        type: mongoose.Schema.Types.Mixed
    },

    admin: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },

    slug: String
}, {
    timestamps: true
})

BookSchema.pre('save', function(next) {
    this.slug = slugify(this.name, {
        lower:true
    })
    console.log(this)
    next()
})


const Book = mongoose.model('Book', BookSchema)


module.exports = Book
