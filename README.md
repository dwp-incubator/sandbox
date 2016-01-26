<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. Git](#1-git)
  - [Goals](#goals)
  - [Conceptual](#conceptual)
  - [Practical](#practical)
- [2. Node](#2-node)
  - [Goals](#goals-1)
  - [Conceptual](#conceptual-1)
  - [Practical](#practical-1)
- [3. Docker](#3-docker)
  - [Goals](#goals-2)
  - [Conceptual](#conceptual-2)
  - [Practical](#practical-2)
- [4. Mongo](#4-mongo)
  - [Goals](#goals-3)
  - [Conceptual](#conceptual-3)
  - [Practical](#practical-3)
- [5. HTML / CSS](#5-html--css)
  - [Goals](#goals-4)
  - [Conceptual](#conceptual-4)
  - [Practical](#practical-4)
- [Putting it all together](#putting-it-all-together)
  - [Goal](#goal)
  - [Practical](#practical-5)
- [6. Extra](#6-extra)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 1. Git
## Goals
To get a very basic understanding of what Git is and be able to use it to checkout tags to do the exercises
## Conceptual
Discussion of what Git is, what problem it solves, why it’s superseded SVN etc. brief overview of the index, staging, HEAD, local and remote repos, Godthab, Gitlab in DWP
## Practical

Commands we will use: 

1. [ ] checkout
2. [ ] log
3. [ ] status
4. [ ] revert

# 2. Node
## Goals
To understand what Node is, and use it to create a basic Node-based REST ape with in-memory persistence
## Conceptual
Discussion of what Node is, what problem it solves, the event-loop, efficiency gains experienced by high-profile sites, when not to use 
– details TBC

## Practical
Work through a subset of LearnYouNode tutorials to get a feel for the basics of Node, sync/async, modules

1. [x] A Hello World http server
2. [x] Introduce nodemon
3. [x] Start building the REST ape by modifying http server to give a fixed response only to GET and POST on /customers.
4. [x] Discuss capturing the request body i.e. on(‘data’,…) and on (‘end’,…). And extracting the id from customer/:id. Review – without a framework, the code is low-level and awkward
5. [x] Introduce npm and import express
6. [x] Re-implement GET and POST on /customers and /customers/:id with express
7. [x] Discuss HTTP verbs in the context of REST, idempotency of GET and PUT etc.
8. [x] Implement PUT and DELETE with express
9. [x] Introduce modules and discuss why we might separate the Customer model from the Customer REST api (single-responsibility principle, testability, reuse etc)
10. [x] Create a Customer module (with in-memory state)

# 3. Docker
## Goals
to understand what Docker is and be able to run a single-container application
## Conceptual
Discussion of what Docker is, what problem it solves, how it’s being used (developer environments through to prod) 
– details TBC

Define docker components (docker, machine, compose) and concepts (images, containers)

## Practical

1. [ ] Dockerise the Node project with a COPY of the app folder and run using port mapping
2. [ ] Introduce docker volumes and show how a mapped volume allows code changes to be picked up by nodemon

# 4. Mongo
## Goals
To understand what Mongo is / how it fits into the data-store landscape, and to have a feel for how data is queried and manipulated in it
## Conceptual
Discussion on data stores
– details TBC

Discussion on Mongo specifically – where it fits, strengths, weaknesses, when to use, alternatives, features, concepts 
– details TBC

## Practical

1. [ ] Run Mongo in docker with mapped port
2. [ ] Introduce the Mongo shell (use apt-get install mongodb-clients if missing from dev image)
3. [ ] Import raw Customers data
4. [ ] Query the data
5. [ ] Insert new records
6. [ ] Mutate and delete records
7. [ ] Introduce aggregation pipelines
8. [ ] Create a simple aggregation on customers using $unwind and $group to give count of Customers by benefit.
9. [ ] Extend aggregation pipeline to group by benefit and sub-group of counts by city.

# 5. HTML / CSS
## Goals
To understand the fundamentals of HTML and CSS
## Conceptual
Discussion on HTML, CSS, Javascript, Ajax, SPAs etc.
– details TBC
 
## Practical

1. [ ] Add a static HTML page to the Node app with a form allowing a new Customer to be defined.
2. [ ] Add styling to the page using CSS

# Putting it all together
## Goal 
to use the different technologies to complete a working application with data-store running in a pair of connected docker containers.
## Practical

1. [ ] Use docker-compose to link the Node and Mongo containers
2. [ ] Create a db module in Node that wraps the Mongo connection logic.
3. [ ] Change the Customer model in Node so that it uses the db module and implements the queries we developed in the Mongo shell
4. [ ] Add jQuery logic to the UI that posts the form to the /customers ape endpoint, prints the result and clears the form.
5. [ ] Possible further extensions to the project if time allows

# 6. Extra

Note: The following list is provided in case we think we need to cover more than the above, or if we want to define some additional steps just in case. We need to select as a group which (if any) of the following we should prepare.

1. [ ] Improve the UI e.g by adding the missing CRUD operations into it.
2. [ ] Improve the REST ape by adding validation.
3. [ ] Introduce Express templates and use them to generate the UI as an alternative to SPA
4. [ ] Introduce unit testing (mocha, mockery, zombie, cucumber, jasmine) and do any of the following: Acceptance Test from the outside, Unit test of the Customer Module (mocking the data store), Integration test of the DB Module
5. [ ] Implement a new query endpoint on /customers?groupBy=benefits&groupBy=city that uses the aggregation pipeline we developed in the Mongo shell, and then use Dimple / D3 to visualise the output (e.g. stacked bar-graph)
6. [ ] Introduce Swagger and add swagger spec using node-express-swagger or similar
7. [ ] Improve GET /customers e.g. by allowing pagination and filtering
