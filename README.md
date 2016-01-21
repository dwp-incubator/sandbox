# Git
## Goals
To get a very basic understanding of what Git is and be able to use it to checkout tags to do the exercises
## Conceptual
Discussion of what Git is, what problem it solves, why it’s superseded SVN etc. brief overview of the index, staging, HEAD, local and remote repos, Godthab, Gitlab in DWP
## Practical

Commands we will use: 

- [ ] checkout
- [ ] log
- [ ] status
- [ ] revert

# Node
## Goals
To understand what Node is, and use it to create a basic Node-based REST ape with in-memory persistence
## Conceptual
Discussion of what Node is, what problem it solves, the event-loop, efficiency gains experienced by high-profile sites, when not to use 
– details TBC

## Practical
Work through a subset of LearnYouNode tutorials to get a feel for the basics of Node, sync/async, modules

- [ ] A Hello World http server
- [ ] Introduce nodemon
- [ ] Start building the REST ape by modifying http server to give a fixed response only to GET and POST on /customers.
- [ ] Discuss capturing the request body i.e. on(‘data’,…) and on (‘end’,…). And extracting the id from customer/:id. Review – without a framework, the code is low-level and awkward
- [ ] Introduce npm and import express
- [ ] Re-implement GET on /customers and /customers/:id with express
- [ ] Discuss HTTP verbs in the context of REST, idempotency of GET and PUT etc.
- [ ] Implement POST, PUT and DELETE with express
- [ ] Introduce modules and discuss why we might separate the Customer model from the Customer REST ape (single-responsibility principle, testability, reuse etc)
- [ ] Create a Customer module (with in-memory state) with methods to help implement the GET methods of the REST ape
- [ ] Extend Customer module with methods to implement the remaining methods of the REST ape (POST, PUT and DELETE).

# Docker
## Goals
to understand what Docker is and be able to run a single-container application
## Conceptual
Discussion of what Docker is, what problem it solves, how it’s being used (developer environments through to prod) 
– details TBC

Define docker components (docker, machine, compose) and concepts (images, containers)

## Practical

- [ ] Dockerise the Node project with a COPY of the app folder and run using port mapping
- [ ] Introduce docker volumes and show how a mapped volume allows code changes to be picked up by nodemon

# Mongo
## Goals
To understand what Mongo is / how it fits into the data-store landscape, and to have a feel for how data is queried and manipulated in it
## Conceptual
Discussion on data stores
– details TBC

Discussion on Mongo specifically – where it fits, strengths, weaknesses, when to use, alternatives, features, concepts 
– details TBC

## Practical

- [ ] Run Mongo in docker with mapped port
- [ ] Introduce the Mongo shell (use apt-get install mongodb-clients if missing from dev image)
- [ ] Import raw Customers data
- [ ] Query the data
- [ ] Insert new records
- [ ] Mutate and delete records
- [ ] Introduce aggregation pipelines
- [ ] Create a simple aggregation on customers using $unwind and $group to give count of Customers by benefit.
- [ ] Extend aggregation pipeline to group by benefit and sub-group of counts by city.

# HTML / CSS
## Goals
To understand the fundamentals of HTML and CSS
## Conceptual
Discussion on HTML, CSS, Javascript, Ajax, SPAs etc.
– details TBC
 
## Practical

- [ ] Add a static HTML page to the Node app with a form allowing a new Customer to be defined.
- [ ] Add styling to the page using CSS

# Putting it all together
## Goal 
to use the different technologies to complete a working application with data-store running in a pair of connected docker containers.
## Practical

- [ ] Use docker-compose to link the Node and Mongo containers
- [ ] Create a db module in Node that wraps the Mongo connection logic.
- [ ] Change the Customer model in Node so that it uses the db module and implements the queries we developed in the Mongo shell
- [ ] Add jQuery logic to the UI that posts the form to the /customers ape endpoint, prints the result and clears the form.
- [ ] Possible further extensions to the project if time allows

# Extra

Note: The following list is provided in case we think we need to cover more than the above, or if we want to define some additional steps just in case. We need to select as a group which (if any) of the following we should prepare.

- [ ] Improve the UI e.g by adding the missing CRUD operations into it.
- [ ] Improve the REST ape by adding validation.
- [ ] Introduce Express templates and use them to generate the UI as an alternative to SPA
- [ ] Introduce unit testing (mocha, mockery, zombie, cucumber, jasmine) and do any of the following: Acceptance Test from the outside, Unit test of the Customer Module (mocking the data store), Integration test of the DB Module
- [ ] Implement a new query endpoint on /customers?groupBy=benefits&groupBy=city that uses the aggregation pipeline we developed in the Mongo shell, and then use Dimple / D3 to visualise the output (e.g. stacked bar-graph)
- [ ] Introduce Swagger and add swagger spec using node-express-swagger or similar
- [ ] Improve GET /customers e.g. by allowing pagination and filtering
