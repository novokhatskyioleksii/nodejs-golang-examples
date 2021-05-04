# nodejs-golang-examples

<a href="https://nodejs.org">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
    alt="Sponsored by Evil Martians" width="300" height="150">
</a>

<a href="https://golang.org">
    <img src="https://golang.org/lib/godoc/images/go-logo-blue.svg"
    alt="Sponsored by Evil Martians" width="300" height="150">
</a>

## Module

Examples of `nodejs-golang` module usage

## Links

`nodejs-golang` module on `Github`  
https://github.com/novokhatskyioleksii/nodejs-golang

`nodejs-golang` module on `npm`  
https://www.npmjs.com/package/nodejs-golang

## Start

Should be started:

Node.js (8080) - `npm run server-nodejs`  
Golang (8090) - `npm run server-golang`

## Endpoints

#### General idea

Url depends on `IMPLEMENTATION` and `METHOD`
`http://localhost:8080/{{IMPLEMENTATION}}/{{METHOD}}?param1=value1`

#### Implementations

1. nodejs
2. nodejs-golang
3. golang

#### Methods and params

1. ping
2. sum (p1, p2 - numbers to sum)
3. fibonacci (n - number in sequence)
4. md5 (n - number of iterations) - standard string ("nodejs-golang") will be used
5. sha256 (n - number of iterations) - standard string ("nodejs-golang") will be used

#### Results

1. "pong" string
2. sum of 2 numbers
3. fibonacci number
4. number of iterations
5. number of iterations

## Support

Linux only, Node.js 14+, Go 1.16.2
