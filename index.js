const colors = require('colors');
const app = require('./app');
const connectDataBase = require('./configs/db');

require('dotenv').config();

const port = process.env.PORT;

colors.setTheme({
    info: 'green',
    help: 'cyan',
    warn: 'yellow',
    error: 'red',
});

app.listen(port, async () => {
    console.log('Server running on port'.warn.italic, port);
    await connectDataBase();
});
