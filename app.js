var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var athletesRouter = require('./routes/athletes');
var aboutTjRouter = require('./routes/aboutTj');


var app = express();
var port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

//urlencoded
app.use(express.urlencoded({
	extended: false
}));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Mount routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/athletes', athletesRouter);
app.use('/aboutTj', aboutTjRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

//==============================================================================

//Begin listening on server
app.listen(port, function (req, res) {
	console.log("Server is listening on port: " + port);
});

module.exports = app;
