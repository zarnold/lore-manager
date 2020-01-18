Create a user for your app

You need to launch the mongo server and point to the db file :

```
   mongod --dbpath G:\IA\Data\db
```

```javascript
use lore-app-db;

db.createUser({
    user: "lore-app",
    pwd: "lore-app-password",
    roles:[{role: "userAdmin" , db:"lore-app-db"}]
})

```

Then :

```javascript
mongo mongodb://localhost/lore-app-db  --username lore-app --password "lore-app-password"
```