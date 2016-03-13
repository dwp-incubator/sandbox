#4.3 Query the data

In a terminal go into the `mongo` shell by typing `mongo`.  **Ensure the mongo docker container is running from the previous stage**. 

1. Find the all documents whose price is less than 500.00

```shell
db.test.find({price:{$lt:500}})
```

2. Sort the documents by price descending

```shell
db.test.find().sort({price:-1})
```

3. Limit the fields returned with a query

```shell
db.test.find({},{name:1})
```

4. Limit the result set

```shell
db.test.find().limit(2)
```

5. Skip over the result set

```shell
db.test.find().skip(2).limit(2)
```

6. Let mongo explain the work it executed in order to satisfy your query

```shell
db.test.find().explain()
```
