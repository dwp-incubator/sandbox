curl -X POST -H "Content-type: application/json" -d '{"name": "john doe"}' http://localhost:8000/customers

echo

curl http://localhost:8000/customers

echo

curl http://localhost:8000/customers/1

echo

curl -X PUT -H "Content-type: application/json" -d '{"id" : 1, "name": "jane doe"}'  http://localhost:8000/customers/1

echo

curl http://localhost:8000/customers

echo

curl http://localhost:8000/customers/1

echo

curl -X DELETE http://localhost:8000/customers/1
