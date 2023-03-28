# West Coast Dev - [Home page](https://www.westcoast.dev)

## Packaging assets
I use [gulp](https://gulpjs.com) to package the assets required to serve the site.

## Css
I use [sass](https://sass-lang.com/documentation/syntax) for my style building.

## Running dev env
The dev environment is a dead-simple docker based nginx server

Simply run `docker-compose up -d` and reach the site at http://localhost:8080 
(You will need to build the assets first of course, `yarn run build`)
