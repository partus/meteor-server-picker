
Package.describe({
  summary: "Dynamically change meteor-cordova server"
});



Package.on_use(function (api) {
  api.add_files("main.js", "web.cordova");
});
