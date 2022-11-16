import app from './app';

const server = app.listen(3000, () => console.log(
    'Server runnings on PORT 3000',
));

export default server;