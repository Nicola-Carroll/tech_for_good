# Tech-for-good

## Overview



## Technologies used

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

3. Set up a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
4. In the client directory create .env containing

```
REACT_APP_ENDPOINT = < SERVER LOCAL HOST END POINT >
REACT_APP_MAP_API = < GOOGLE MAPS API KEY >

```

An example of the server's local host end point is `http://localhost:5000/api/`

## Running tests
