const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user')
//Require your User Model here!

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  async function(accessToken, refreshToken, profile, done) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up

    try {
			// first check has this user logged into our app before?
			// search by the googleId property to see if the googleId exists in the database
			// if it does the user has logged in before
			let user = await User.findOne({googleId: profile.id});
			// if user document exists then pass the users information to the next middleware function
			// if the user doens't exist user will be undefined
			// the next place is passport.serializeUser which is located below
			if(user) return done(null, user);  // done(error, dataYouWantToPass), 
			//done passes the information to the next middleware function

			// WE HAVE NEW USER, (if User.findOne) returned undefined
			// Create that User
			user = await User.create({
				name: profile.displayName,
				googleId: profile.id,
				email: profile.emails[0].value,
				avatar: profile.photos[0].value
			})
			// once we create the user, pass the user to the next middleware function
			// the next place is passport.serializeUser which is located below
			return done(null, user)


		} catch(err){
			return done(err)
		}

  }
));



passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(userId, done) {

  User.findById(userId, function(err, userDoc){
		if(err) return done(err);
		done(null, userDoc); // this assigns the user document that we just found from the database to req.user
		// this is essentially doing req.user = userDoc
	})

});



