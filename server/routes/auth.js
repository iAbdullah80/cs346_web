const express=require('express')
const router=express.Router()
const passport=require('passport')

const GoogleStrategy = require('passport-google-oauth20').Strategy;
<<<<<<< HEAD
=======
const User = require('../models/User')
>>>>>>> 317aa2ff6be8fbbea5fda621ca4d1720a59bf3b5

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
<<<<<<< HEAD
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
=======
  async function(accessToken, refreshToken, profile, done) {
    const newUser = {
      googleId: profile.id,
      displayName: profile.displayName,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      profileImage: profile.photos[0].value
    }

    try {
      let user = await User.findOne({googleId: profile.id})

      if (user){
        done(numll, user)
      } else{
        user = await User.create(newUser)
        done(numll, user)
      }
      
    } catch (error) {
      console.log(error)
    }

>>>>>>> 317aa2ff6be8fbbea5fda621ca4d1720a59bf3b5
  }
));

router.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login-failure',
    successRedirect: '/dashboard'
}));

router.get('login-failure', (req,res)=>{
    res.send('Something went worng...')
});

// presist user data
<<<<<<< HEAD
passport,passport.serializeUser(function(user, done){
=======
passport.serializeUser(function(user, done){
>>>>>>> 317aa2ff6be8fbbea5fda621ca4d1720a59bf3b5
    done(null, user.id)
})
// Retrieve user data from session
passport.deserializeUser(function(id, done){
    User.FindById(id, function(err, user){
        done(err, user)
    })
})
module.exports=router