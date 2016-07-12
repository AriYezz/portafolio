var gulp = require("gulp"),
	jade = require("gulp-jade"),
	stylus = require("gulp-stylus"),
	livereload = require('gulp-livereload');


gulp.task("default",function(){
	gulp.watch('./views/*.jade',['jade'])
	gulp.watch('./static/css/*.styl',['stylus'])
})

gulp.task("jade",function(){
	gulp.src('./views/*.jade')
    .pipe(jade({
    	pretty:true
    }))
    .pipe(gulp.dest('./public/views'))
})
gulp.task("stylus",function(){
	gulp.src('./static/css/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/css'))
})