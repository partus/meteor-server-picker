
Server-picker
========

A package which allows to change dynamicaly the server address from the application  to which the ddp connects.

Using this package one can implement a general application (meteor application client container) for google play and app store,  which  can be replaced with any meteor app. Good to use when there are multiple clients, for which different customized apps are required.

Usage
____________

Add this package in top of any other package in .meteor/packages

set local storage item to contain the desired server: window.localStorage.setItem("__root_url","http://yourOtherServer.com")

After the next reload of the app, it will connect to yourOtherServer.com

Sample ui implemetation comes with https://github.com/partus/meteor-server-picker-ui
