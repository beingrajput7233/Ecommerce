const express=require ('express')
const mongoose=require('mongoose')
var passport=require('passport')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
require('./db/conn')
const app=express()
app.use(express.json())
app.use(require('./routes/register'))
// app.use(passport.initialize());
// app.use(passport.session());
app.use(require('./routes/login'))
app.get('/',(req,res)=>{
    res.send('Hello')
})


app.listen(5000,()=>{
    console.log('Server running on 5000');
})

//------------------------------------------------------------

// const express = require('express');
// var passport = require('passport');
// const cookieSession = require('cookie-parser');
// require('./routes/passport');

// const app = express();

// app.use(cookieSession({
//   name: 'google-auth-session',
//   keys: ['key1', 'key2']
// }))

// const isLoggedIn = (req, res, next) => {
//     if (req.user) {
//         next();
//     } else {
//         res.sendStatus(401);
//     }
// }

// app.use(passport.initialize());
// app.use(passport.session());

// const port = process.env.PORT || 5000

// app.get("/", (req, res) => {
//     res.json({message: "You are not logged in"})
// })

// app.get("/failed", (req, res) => {
//     res.send("Failed")
// })
// app.get("/success",isLoggedIn, (req, res) => {
//     res.send(`Welcome ${req.user.email}`)
// })

// app.get('/google',
//     passport.authenticate('google', {
//             scope:
//                 ['email', 'profile']
//         }
//     ));

// app.get('/google/callback',
//     passport.authenticate('google', {
//         failureRedirect: '/failed',
//     }),
//     function (req, res) {
//         res.redirect('/success')

//     }
// );

// app.get("/logout", (req, res) => {
//     req.session = null;
//     req.logout();
//     res.redirect('/');
// })

// app.listen(port, () => console.log("server running on port" + port))

//----------------------------------------------------



// Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
