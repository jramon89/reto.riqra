const host = process.env.HOST || 'localhost',
    port = process.env.PORT || 4000;

module.exports = {
	host,
	port,
	routes: {
		comments: require('../routes/comment.route'),
	}
};