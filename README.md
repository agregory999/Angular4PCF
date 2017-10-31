# Property

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

DO NOT RUN the development server, as the config properties must be generated by a PCF buildpack

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Secret Sauce

1) .profile - this tells the static buildpack to run the enclosed script, which grabs environment settings and inserts them into a file called config.json in the document root of the Angular app.

2) package.json - look for the post-build script that copies the .profile into the resulting dist/ directory we deploy to PCF.

3) Service - this one is called "dynamic" - look in src/app/properties - This service queries the /config.json file that is generated at deploy time

## Build

Upon first download of this repo, run `npm install` to bring in the required packaged and create the `node_modules` directory.

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

To deploy, run `cf push`.  The reason this works with teh static buildpack is due to the presence of the manifest file with the static buildpack.

## Property Changes
To change a config property, use cf set-env <app> <prop name> <value> and then restage the application.

Using 'cf ssh <app>' you can then view gthe new config.json within app/public inside the container.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# Angular4PCF
