# How to setup and run the API backend

To setup and run the backend you need execute the following commands inside this folder:

```
npm install
npm start
```

The backend server will then actively listen on [http://localhost:3000](http://localhost:3000) for the the following endpoints:
```
GET    /support-tickets
GET    /support-tickets/1
POST   /support-tickets
PUT    /support-tickets/1
PATCH  /support-tickets/1
DELETE /support-tickets/1
```

Note: All the changes will be reflected in the `db.json` file.
It can be used for debugging purposes.
This backend uses internally https://github.com/typicode/json-server library.
More information can be found on the github repo.