var tests = [];

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/\/base\/test\/js\/.*\.js$/.test(file)) {
      tests.push(file);
    }
  }
}
console.log("Running tests for");
console.log(tests);

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/js',

    shim: {
      "lib/jquery" : {
        "exports" : "jquery"
      }
    },
    deps : ["lib/jquery"],
    callback: function($) {
      require(tests, function(resolvedTests) {
        $.when.apply($, arguments).done(function() {
          window.__karma__.start();
        });
      });
    }
});
