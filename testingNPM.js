const _ = require('underscore')
const mongoose = require('mongoose')

const is = _.contains([1, 2, 3], 3);
console.log(is);

// npm list --> it will show a tree of all the dependencies installed
// npm list --depth=0
// npm view mongoose
// npm view mongoose dependencies
// npm view mongoose versions

// Install a specific version of a package
// npm i mongoose@2.4.2

// To find the outdated versions installed --->
// npm outdated 


// To update versions --->
// npm update

// npm install -g npm-check-updates   --->
// ncu -u

// to uninstall a package --->
// npm uninstall ...   or    npm un ...


// to find out all outdated global packages --->
// npm -g outdated