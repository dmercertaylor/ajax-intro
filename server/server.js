const express = require('express');
const app = express();

const port = 5000;

app.use( express.static('server/public') );

app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`);
});

// Some data...
const cohorts = ['Trifid', 'Playfair', 'Atbash', 'Sirius', 'Menkar', 'Gacrux'];

// GET request - sends back all cohorts
app.get('/cohorts', (req, res)=>{
    res.send(cohorts);
});