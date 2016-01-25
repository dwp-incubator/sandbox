#2.3 Start building the REST ape by modifying http server to give a fixed response only to GET and POST on /customers.

## Make the changes

Update the server so that there are placeholders for:

- using HTTP POST against the customer endpoint
- using HTTP GET against the customer endpoint
- do something else if the HTTP method is not POST or GET
- carry on doing as before if the endpoint is not `/customers`

## Test out the endpoints

To do this part we will use the tool `postman` which will help to craft the different HTTP requests we need to make.

1. HTTP POST request to `/customers`
2. HTTP GET request to `/customers`
3. HTTP PUT request to `/customers`
4. HTTP GET request to `/`

