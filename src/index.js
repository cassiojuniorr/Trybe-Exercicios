const app = require('./app');
const activities = require('./mock/activities');

app.get('/myActivities', (_req, res) => {
    res.status(200).json(activities);
});

app.get('/myActivities/:id', (req, res) => {
    const { id } = req.params;

    const activity = activities.find((act) => act.id === Number(id));

    if (!activity) { res.status(404).json({ message: 'not found' }); }

    res.status(200).json(activity);
});

app.get('/filter/myActivities', (req, res) => {
    const { status } = req.query;

    const activity = activities.filter((act) => act.status === status);

    if (!activity) { res.status(404).json({ message: 'not found this activity' }); }

    res.status(200).json(activity);
});

app.post('/myActivities', (req, res) => {
    activities.push(req.body);
    res.status(201).json(activities);
});

app.put('/myActivities/:id', (req, res) => {
   const { id } = req.params;
   const updateActivity = req.body;

   const activity = activities.findIndex((act) => act.id === Number(id));
   console.log('ID:', activity);

   activities[activity] = { ...activities[activity], ...updateActivity }; 

   res.status(200).json({ message: 'Atualizado!' });
});

app.delete('/myActivities/:id', (req, res) => {
    const { id } = req.params;

    const filterActivity = activities.find((act) => act.id === Number(id));

    activities.splice(filterActivity, 1);

    res.status(200).json({ message: 'Removido!' });
});