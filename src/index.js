const app = require('./app');
const trybeCacau = require('./mock/trybeCacau');

app.get('/chocolates', (_req, res) => {
    res.status(200).json(trybeCacau);
});

app.get('/chocolates/:id', (req, res) => {
    const { id } = req.params;

    const chocolate = trybeCacau.find((chl) => chl.id === Number(id));
    res.status(200).json(chocolate);
});

app.get('/chocolates/brand/:brandId', (req, res) => {
    const { brandId } = req.params;

    const chocolate = trybeCacau.find((chl) => chl.brandId === Number(brandId));
    res.status(200).json(chocolate);
});
