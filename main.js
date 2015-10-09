console.log(__meteor_runtime_config__);
var rootUrl = window.localStorage.getItem("__root_url");
if(rootUrl){
  console.log()
__meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL = __meteor_runtime_config__.ROOT_URL =  rootUrl;
  if(Meteor && Meteor.absoluteUrl &&  typeof Meteor.absoluteUrl.defaultOptions == "object"){
    Meteor.absoluteUrl.defaultOptions.rootUrl = rootUrl;
    // console.log("Meteor.absoluteUrl.defaultOptions.rootUrl = rootUrl", rootUrl);
  }  
}


