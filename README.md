# blanja-REST-API
## About project

this project is a simple implementation of RESTful API using *framework* ExpressJS and mySQL *database* made for for [Blanja](blanja-proto.netlify.app) website

## Requirements

- npm [Node.js](https://nodejs.org/en/download/)
  

- ExpressJS
  

```
npm install express
```

- mySQL
  

```
npm install mysql
```

- morgan
  

```
npm install morgan
```

## Getting started

### Installation

1. Clone repository
  
  ```
  git clone https://github.com/agungl4/blanja-REST-API.git
  ```
  
2. Install additional package
  
  - npm
    
  
  ```
  npm install
  ```
  
  - yarn
    
  
  ```
  yarn add
  ```
  
3. Config database, you can set the configuration according to config folder
  
  ```
  const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DBname'
  });
  ```
  

### Endpoint scheme

- get all product

```js
GET
/api/products
```

- get product by ID

```js
GET
/api/product/:id
```

- add new product

```js
POST
/api/product
```

- edit product

```js
PATCH
/api/product/update
```

- delete product

```js
DELETE
/api/products/delete:id
```
