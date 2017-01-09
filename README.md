# Asynchronous JavaScript

This project is a demonstration of asynchronous JavaScript on the server (using NodeJS) and in the browser.


## Requirements

* [git](https://git-scm.com/downloads)
* [NodeJS](https://nodejs.org/en/)


## Get the Code

Download the code for this project by using git clone:
```bash
git clone https://github.com/Learn-by-doing/async-javascript.git
```


## Install Node Modules

Like any node project, you will need to run download and install the required node modules for the project to run. Use the following command:
```bash
npm install
```

Once that has finished, you can run the program like this:
```bash
npm start
```

You should see the following if everything is OK:
```
Server started and listening at localhost:3000
```


## Try the demo

Open your browser to [localhost:3000](http://localhost:3000) and enter a search query. After a short while you should see search results in the page. Here is what is happening:
* The browser:
  * intercepts the search form submission.
  * sends a request to your local web server.
  * waits for a response from the local web server.
* The local web server:
  * receives the request.
  * sends a request to the [Shodan web API](https://developer.shodan.io/api).
  * waits for the response from Shodan.
  * receives the response from Shodan.
  * sends a response to the browser.
* The browser receives the response from the local web server.

Each of these requests/responses are asynchronous and allow other operations to happen during the waiting time.


## Going further

The JavaScript code running in the browser can be found in the [index.html](https://github.com/Learn-by-doing/async-javascript/blob/master/public/index.html) file. There are four different examples of asynchronous JavaScript in the browser-side code:

* A simple timeout loop
* A timeout with a delay of 0 seconds
* An AJAX request
* Use of the `async.util` function from the [async.js](https://caolan.github.io/async/) utility library.

Read the source and comments for further explanation.
