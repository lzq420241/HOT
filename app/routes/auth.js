module.exports = function(app,passport) {

	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/success', 
		failureRedirect : '/#signin', 
		failureFlash : true 
	}));

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/success', 
		failureRedirect : '/#signup', 
		failureFlash : true 
	}));

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/#signin');
	});
};