const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');

};

exports.addStore = (req, res) => {
    res.render('editStore', {title: 'Add Store' });
};

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save();
    await store.save();
    req.flash('success', 'The new store ${store.name} has been created. ');
    res.redirect('/store/${store.slug}');

};
