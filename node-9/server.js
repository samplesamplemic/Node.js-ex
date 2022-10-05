const createApp = require('./app.js');

const app = createApp();

app.listen(3001, () => {
console.log("server started..");
})