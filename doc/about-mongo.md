Create a user for your app

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