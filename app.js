

const express = require('express');
const path = require('path');
const app = express();


app.use('/public', express.static(path.join(__dirname,'views')));
app.set('view engine','ejs');

function checkAuth(req, res, next) {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
}


app.post('/', (req, res) => {
    res.render('index');
});

app.post('/login', (req, res) => {
    res.render('login');
});

//Super Admin Side

app.get('/super-admin', checkAuth, (req, res) => {
    res.render('super_admin');
});

app.get('/view-accounts', checkAuth, (req, res) => {
    res.render('view_accounts');
})



//Admin side

app.get('/admin', checkAuth, (req, res) => {
    res.render('admin');
});

app.get('/view-request', checkAuth, (req, res) => {
    res.render('view_request');
})

app.get('/view-inquiries', checkAuth, (req, res) => {
    res.render('view_inquiries');
});



app.listen(3000);
console.log('Server started at port 3000');