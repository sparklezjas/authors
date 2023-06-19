const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, 'Name is required'],
        minLength: [3, 'The name must be 3 or more characters'],
        maxLength: [50, 'The name is too long']
        },
}, { timestamps: true });
module.exports = mongoose.model('Authors', AuthorSchema);

