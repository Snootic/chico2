db = db.getSiblingDB('chico');

db.createUser({
  user: 'fatec',
  pwd: 'fatec',
  roles: [
    {
      role: 'readWrite',
      db: 'chico',
    },
  ],
});