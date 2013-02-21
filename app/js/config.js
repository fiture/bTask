define([], function() {
  var config = {};
  config.apikey = 'AIzaSyDIaRN87SLpS8FBVLc1ZkkIp4B21s3XguE';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '1056043353762.apps.googleusercontent.com';
  
  _.templateSettings = {
  
    interpolate: /\{\{(.+?)\}\}/g
  }

  return config;
});
