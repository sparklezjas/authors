const AuthorController = require('../controllers/authors.controller');
module.exports = (app) => {
    app.get('/api/allAuthors', AuthorController.findAllAuthors)
    app.post('/api/newAuthor', AuthorController.createAuthor)
    app.get('/api/oneAuthor/:id', AuthorController.findOneAuthor)
    app.patch('/api/updateAuthor/:id', AuthorController.updateAuthor)
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)
}

