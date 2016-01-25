# 2.7 Discuss HTTP verbs in the context of REST, idempotency of GET and PUT etc.

## Some info on Idempotency

Some points to summarise:

- **GET should not cause any change on the server side**
- **The responses from idempotent methods could change with subsequent requests due to concurrent requests modifying state on the server**

> 9.1.2 Idempotent Methods

> Methods can also have the property of "idempotence" in that (aside from error or expiration issues) the side-effects of N > 0 identical requests is the same as for a single request. The methods GET, HEAD, PUT and DELETE share this property. Also, the methods OPTIONS and TRACE SHOULD NOT have side effects, and so are inherently idempotent.
>
> However, it is possible that a sequence of several requests is non- idempotent, even if all of the methods executed in that sequence are idempotent. (A sequence is idempotent if a single execution of the entire sequence always yields a result that is not changed by a reexecution of all, or part, of that sequence.) For example, a sequence is non-idempotent if its result depends on a value that is later modified in the same sequence.
>
> A sequence that never has side effects is idempotent, by definition (provided that no concurrent operations are being executed on the same set of resources).
>
> https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html


> Idempotence
> Idempotence is a funky word that often hooks people. Idempotence is sometimes a confusing concept, at least from the academic definition.
>
> From a RESTful service standpoint, for an operation (or service call) to be idempotent, clients can make that same call repeatedly while producing the same result. In other words, making multiple identical requests has the same effect as making a single request. Note that while idempotent operations produce the same result on the server (no side effects), the response itself may not be the same (e.g. a resource's state may change between requests).
>
> The PUT and DELETE methods are defined to be idempotent. However, there is a caveat on DELETE. The problem with DELETE, which if successful would normally return a 200 (OK) or 204 (No Content), will often return a 404 (Not Found) on subsequent calls, unless the service is configured to "mark" resources for deletion without actually deleting them. However, when the service actually deletes the resource, the next call will not find the resource to delete it and return a 404. However, the state on the server is the same after each DELETE call, but the response is different.
> 
> GET, HEAD, OPTIONS and TRACE methods are defined as safe, meaning they are only intended for retrieving data. This makes them idempotent as well since multiple, identical requests will behave the same.
>
> http://www.restapitutorial.com/lessons/idempotency.html

## HTTP response codes for methods

## General

- 400(Bad Request): The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.
- 404(Not Found): When the requested resource cannot be found
- 500(Internal Server Error): When an **unhandled exception** is caught on the server side.  This should contain static information (see **Exception Shielding**)

## POST

Used to create a new resource

- 201(Created): When the resource has been created on the origin server
- 202(Accepted): When the resource cannot be completed immediately.
- 307(Temporary Redirect): When the resource endpoint has temporarily moved and the client should repeat the request with the same HTTP method.

## PUT

Used to update an existing resource

- 204(No Content): When the request has been handled successfully
- 307(Temporary Redirect): When the resource endpoint has temporarily moved and the client should repeat the request with the same HTTP method.

## GET
Used to read existing resources both single and multiple

- 200(OK): When the request has been handled successfully including the response body 
- 307(Temporary Redirect): When the resource endpoint has temporarily moved and the client should repeat the request with the same HTTP method.

## DELETE
Used to delete an existing resource

- 204(No Content): When the request has been handled successfully
- 307(Temporary Redirect): When the resource endpoint has temporarily moved and the client should repeat the request with the same HTTP method.

## OPTIONS

Used to retrieve the available methods for a resource which are returned in the **Allow** response header
