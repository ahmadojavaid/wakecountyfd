var content = ['**/js/*.js', '**/*.html'];
var css = ['**/css/*.css'];

var options = {
  // Will write purified CSS to this file.
  output: './dist/purified.css'
};

purify(content, css, options);