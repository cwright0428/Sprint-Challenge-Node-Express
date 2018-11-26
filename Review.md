# Review Questions

## What is Node.js?

node.js is a JavaScript runtime environment. It allows for JS to be run outside the browser and used in many other applications, in our case a backend server but also on the desktop and in "smart" devices like TV's, Watches, Speakers etc. it's also non blocking which means it has a small resource footprint, and is home to the largest package manager in existance NPM

## What is Express?

Express is a node framework which extends the feature-set of node by adding things like middleware. It's unopinionated which means that devs aren't locked into a certain JS library for development Vanilla JS, react, Vue, angular, ember - use whatever you like it all works with express

## Mention two parts of Express that you learned about this week.

that the one of the largest parts of express is actually middleware, what express IS, previous to this week I had no idea about anything serverside besides a passing familiarity with node (via npm)

## What is Middleware?

software that extends the functionaility of other software in the case of express, it's the functions that are ran in the order that they'rw introduced


## What is a Resource?

identifiable objects or files that can be used on the web

## What can the API return to help clients know if a request was successful?

success or a 200 status or any custom message that the devs put in

## How can we partition our application into sub-applications?
We can use routes to split our App into components like react, making each piece it's own sub-app and routing it back to the top-level app as needed

## What is express.json() and why do we need it?
is a function that returns data as a json object. It's a more refined and widely use way to parse data.
