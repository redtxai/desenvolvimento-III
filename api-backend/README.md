# How to setup and run the API backend

To setup and run the backend you need execute the following commands inside this folder:

```
npm install
npm start
```

The backend server will then actively listen on [http://localhost:3000](http://localhost:3000) for the the following endpoints:
```
GET    /usuario
GET    /usuario/1
POST   /usuario
PUT    /usuario/1
PATCH  /usuario/1
DELETE /usuario/1
```

Note: All the changes will be reflected in the `db.json` file.
It can be used for debugging purposes.
This backend uses internally https://github.com/typicode/json-server library.
More information can be found on the github repo.

http://localhost:3000/usuario
http://localhost:3000/comorbidade
http://localhost:3000/posto_saude
http://localhost:3000/noticia
