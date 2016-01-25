1. Changed the if statement which looks at the url as now it may be just `/customer` but it also might have an identifier on the end of the path also like `/customers/{customerId}` e.g. `/customers/1`
2. Split up the request path to check for the customer id component
3. Split the GET route into a path for getting all customers and a path for getting a single customer
