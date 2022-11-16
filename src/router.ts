import { Request, Response, Router } from 'express';
import Plants, { IPlant } from './Plants';

const router = Router();
const plant = new Plants();

router.get('/', async (_req: Request, res: Response) => {
    const allPlants = await plant.getPlants();

    res.status(200).json(allPlants);
});

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const plantId = await plant.getPlantById(id);

    res.status(200).json(plantId);
});

router.post('/', async (req: Request, res: Response) => {
    const newPlant: IPlant = req.body;

    const plantId = plant.initPlant(newPlant);

    res.status(201).json(plantId);
});

router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const newPlant: IPlant = req.body;
    const plantId = await plant.editPlant(id, newPlant);

    res.status(200).json(plantId);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await plant.removePlantById(id);

    res.status(200).end();
});

export default router;