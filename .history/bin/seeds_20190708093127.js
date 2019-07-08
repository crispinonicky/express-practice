const mongoose = require('mongoose')

const Book = require ('../models/Book')

mongoose
  .connect('mongodb://localhost/books-app', {useMongoClient: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


  const bookArr = [

    {
      title: 'Harry Potter',
      author: 'JK Rowling',
      description: 'Does magic and goes to a magic school',
      rating: 8
    },

    {
      title: 'Captain Underpants',
      author: 'Dan Pilkey',
      description: 'me underwears',
      rating: 10
    },

    {
      title: 'Pikachu and friends go to Publix to get chicken tender subs',
      author: 'Ash',
      description: 'Pikachu and friends go to Publix to get chicken tender subs',
      rating: 0
    }

  ];


  Book.create(bookArr)

