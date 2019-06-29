const 	posts = require('./posts'),
		courses = require('./courses'),
		home = require('./homeContent'),
    	items = require('./items'),
		meta = require('./meta'),
		intl = require('./intl');

module.exports = {
	home: {
		model: home.homeModel,
		data: home.homeData
	},
	posts: {
		model: posts.postModel,
		data:  posts.postData
	},
    courses: {
        model: courses.courseModel,
        data:  courses.courseData
    },
	items: {
		model: items.itemModel,
		data: items.itemData
	},
	meta: {
		model: meta.metaModel,
		data: meta.metaData,
	},
	intl: {
		model: intl.intlModel,
		data: intl.intlData,
	}
};