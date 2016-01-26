#4.2 Introduce the Mongo shell and import raw Customers data

In this section the following two tools will be used:

 - mongo
 - mongoimport

We have not installed mongo on this instance we have instead started a mongo instance by creating a container of the official `mongo` image.

To start querying the mongo instance, some test data needs to be added to get a feel for the mongo shell.  To do this the data fromt he `test-data.json` file will be passed to the `mongoimport` tool.  **If you are wondering why the lines are not comma delimited and contained within square brackets that is simply because the default behaviour for the mongoimport tool is to expect the json objects separated by newlines only, being careful not to have newlines in the json objects themselves i.e. do not pretty print the json!**

The following imports the data into the test collection of the local mongo db instance:

```shell
mongoimport --db test --collection test --drop --file test-data.json
```

After this import has completed the contents of the collection can then be queried.  The following query finds all the documents which currently exist:

```shell
mongo
> db.test.find()
```

