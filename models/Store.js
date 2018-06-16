const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a name for the store :)'
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String]
});

// this would fail if two stores have the same slug
storeSchema.pre('save', function(next) {
    if(!this.isModified('name')) {
        next();
        return;
    }
    this.slug = slug(this.name);
    next();
});

module.exports = mongoose.model('Store', storeSchema);
