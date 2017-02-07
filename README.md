# Static Boilerplate
Boiler plate for generating a static website boilerplate. Includes: 
 - [Assemble](http://assemble.io/) - a static site geneartor
 - [Bootstrap 4](http://v4-alpha.getbootstrap.com/) - frontend CSS framework
 - [SASS](http://sass-lang.com) compiler
 - [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) module for starting a server with livereload while developing

Everything is optimised for maximum reload speed on file save.

## Usage
Install packages with:
```shell
$ npm install && bower install
```

Run the development server with:
```shell
$ grunt server
```
This will build the project and serve it at `http://localhost:9000/`. It will also watch for changes in `src` directory and reload the page.

To build the project without running a server run:
```shell
$ grunt
```

To deploy the project, just deploy the `public` directory.
