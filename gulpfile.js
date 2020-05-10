/* disable-eslint */
let gulp = require("gulp");
let ftp = require("vinyl-ftp");

gulp.task("deploy", () => {
  let conn = ftp.create({
    host: "localhost",
    user: "DESKTOP-8ETGN16/ftp",
    pass: "ftpdeploy",
    parallel: 10,
    debug: info => {
      console.log(info);
    }
  });
  let globs = ["dist/**"];
  return gulp
    .src(globs, { base: "./dist/", buffer: false })
    .pipe(conn.dest("./"));
});
