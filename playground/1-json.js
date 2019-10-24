const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json');
const data = dataBuffer.toString();
const users = JSON.parse(data);
users.name = 'Duc';
users.age = 20;

const usersJson = JSON.stringify(users);
fs.writeFileSync('1-json.json',usersJson);