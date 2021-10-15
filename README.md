# Tech-for-good

## Overview

A website that connects businesses with left over food to charities.

![image](https://user-images.githubusercontent.com/83607124/137516096-a558dc22-890e-4af2-a8c2-09e0d1c15705.png)



## Team members

- [Lizzy Ballantine](https://github.com/eballantine)
- [Yousuf Mohamed](https://github.com/yousufmohamed17)
- [Paul Rainsford](https://github.com/PaulRainsford)
- [Nicola Carroll](https://github.com/Nicola-Carroll)
- [Zainab Baruud](https://github.com/zb-coder)


## Technologies used

- MERN Stack (MongoDB, Express, React, Node)
- DB Hosting: MongoDB Atlas
- Testing: Jest unit testing on the backend, Cypress for integration testing
- API Testing: Insomnia, Postman
- APIs: Google API, Open Postcode Geo API

## Set up databases

1. Create a .env file in the root directory

3. Set up a MongoDB account and follow the [guide](https://docs.mongodb.com/manual/tutorial/getting-started/) to setting up a database

2. In your root .env file write the following: 
```
PORT = 5000
CONNECTION_URL = < MONGODB URL STRING HERE >
TEST_CONNECTION_URL = < MONGODB TEST URL STRING HERE >
```

## Running the program locally

1. Clone this repo
2. In both the root directory and the client directory separately run

```
npm install
```

3. Set up a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key) which allows access to the Google Maps JavaScript API
4. In the client directory create .env containing

```
REACT_APP_ENDPOINT = < SERVER LOCAL HOST END POINT >
REACT_APP_MAP_API = < GOOGLE MAPS API KEY >

```

An example of the server's local host end point is `http://localhost:5000/api/`

## Running tests
