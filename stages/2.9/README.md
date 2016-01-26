#2.9 Introduce modules and discuss why we might separate the Customer model from the Customer REST api (single-responsibility principle, testability, reuse etc)

## Separation of concerns

Modules allow you to separate concerns in the codebase into logical groupings e.g. Customer Module, Authentication Module, Authorisation Module. Each of the three examples are certainly sepaarte concerns and so it is a good idea to keep them separate which modules give you the ability to do so.  Ofcourse at runtime these concerns will be composed together as it may be a good idea to ensure any invocation of the Customer Module is guarded by both the Authentication and Authorisation module.

## Encapsulation

Although you do not NEED modules to achieve encapsulation with your code, modules give you another mechanism to further encapsulate allowing you to protect parts of the codebase which should only be accessible from membrs of the module.

## Testability

Modules are a single unit which can be tested (assuming good practice has been followed).  It should be possible to test a module in isolation by replacing dependencies at runtime via various available mechanisms.  This contrinutes to a more de-coupled code base.

## Organisation

Modules allow your code base to be efficiently split into related concerns using different files and folders.  Grouping the code together like this contributes to higher cohesion.



