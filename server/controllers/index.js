let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the user model instance
let userModel = require('../models/user');
let User = userModel.User; //alias


module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: "Home", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', {title: "About", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('Services', {title: "Services", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('Projects', {title: "Projects", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', {title: "Contact", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayLoginPage = (req, res, next) => {
    res.render('auth/Login', {title: "Login", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already loged in
    if(!req.user)
    {
        res.render('auth/login', 
        {
            title: 'Login',
            message: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName: ''
        })
    }
    else 
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // server err
        if(err)
        {
            return next(err);
        }
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // server error
            if(err)
            {
                return next(err);
            }
            return res.redirect('/contactlist')
        });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is already loged i 
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            message: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    // initiate a user object
    let newUser = new User({
        username: req.body.username,
        // passwoer: req.body.password
        email: req.body.email,
        displayName: req.body.displayName

    });

    User.register(newUser, req.body.password, (err) =>{
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exist'
                );
                console.log('Error: User Already Exist')
            }
            res.render('auth/register',
            {
                title: 'Register',
                message: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
            // if no error exist, then registration successful

            // reddirect the user and authenticate them

            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contactlist')
            });
        }
    });

}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}