const mongoose = require('Mongoose')
const Schema = mongoose.Schema;

const bookSchema = new Schema({

  title: String,
  author: String,
  description: String,
  rating: Number

})


const BookModel = mongoose.model('Book', bookSchema)



module.export = BookModel;