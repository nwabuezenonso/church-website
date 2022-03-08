const express = require('express');
// const mongoose = require('mongoose')
// const User = require('./models/model')
// const Authrouters = require('./routes/authRoutes');
// const cookieParser = require('cookie-parser');
// const { requireAuth, checkUser } = require('./middleware/authmiddleware'); 
// const { sendWelcomeEmail } = require('./emails/mail')
// const sendMail = require('./mail')

//set up the express function
const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(express.static('public'));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}))
// app.use(cookieParser());

//view engine
app.set('view engine', 'ejs');

//database connection

//routes
// app.get('*', checkUser)
app.get('/', (req, res)=>{
  res.render('index', {
    title: 'Home'
  })
})

app.get('/about', (req, res)=>{
  res.render('about', {
    title: 'About us'
  })
})

app.get('/event', (req, res)=>{
  res.render('event', {
    title: 'Event'
  })
})

app.get('/contact', (req, res)=>{
  res.render('contact', {
    title: 'Contact us'
  })
})

app.get('/baptismForm', (req, res)=>{
  res.render('baptismForm', {
    title: 'BaptiseForm'
  })
})

app.get('/signup', (req, res)=>{
  res.render('signup', {
    title: 'Signup'
  })
})

app.get('/login', (req, res) => {
  res.render('login', {
    title: 'Log in'
  })
})

app.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard'
  })
})

app.get('/membership', (req, res) => {
  res.render('membership', {
    title: 'Membership'
  })
})

app.get('/baptism', (req, res) => {
  res.render('baptism', {
    title: 'Baptism'
  })
})

app.get('/form', (req, res) => {
  res.render('form', {
    title: 'form'
  })
})
// app.post('/signup', async(req, res)=>{
//   const { email, password } = req.body;

//   try {
//     const user = await User.create({ email, password });
//     console.log(user)
//     const token = createToken(user._id);
//     res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
//     res.render('index')
//   }
//   catch(err) {
//     console.log(err);
//   }
// })
// app.get('/member',requireAuth,  (req, res) =>{
//   res.render('member')
// })
// app.post("/email", (req, res) =>{
//   const {email, subject} = req.body
//   console.log('Data: ', req.body)
  
//   sendMail(email, subject , function(err,data){
//       if(err){
//           res.status(500).json({message: 'Internal Error'});
//       }else{
//           res.json({message: 'Email sent!!!!'})
//       }
//   })
//   res.json({message: 'Message recieved!'})
// })
// app.use(Authrouters);

//Error routes
// app.use((req, res)=>{
//   res.status(404).render('404')
// })

app.listen(port, () => {'Server is running on port 3000'})