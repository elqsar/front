# Hakka Stack

## Setup

- npm install -g gulp
- npm install -g bower
- clone this repo (& cd into it :)
- npm install
- bower install

## To add new library type definition
- tsd install your_library --save ( automatically will be added to app/typings )

## To add new library
- npm install your_library --save ( or --save-dev )
- bower install your_library --save ( or --save-dev )

## Usage
- run `gulp` or `npm start` to have a local server ready live reload
- run `gulp test` or `npm test` to run unit tests
- try `gulp help` to see other available tasks

## Todo:
- [ ] gulp
	- [X] gulp help
	- [ ] clean-ts task - setup config properly
	- [x] merge js files into 1
- [x] bower
- [x] sass / less
- [x] install new libraries with tsd
- [ ] material, bootstrap or alike ?
- "biased" variants as branches 
    - [x] angular