const figlet = require('figlet');

figlet.text('Hello Friend',{
   // option,
}, (err, data) => {
    if(err){
        console.log('Error:', err);
    }
    console.log(data);
})