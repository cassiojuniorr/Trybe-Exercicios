const nameValidation = (req, _res, next) => {
    const { name } = req.body;
    if (!name) {
        next({ status: 400, message: 'O campo name é obrigatório' });
    }

    if (name.length < 4) {
        next({ status: 400, message: 'O campo name deve ter pelo menos 4 caracteres' });
    }

    next();
};

const priceValidation = (req, _res, next) => {
    const { price } = req.body;

    if (!price) { next({ status: 400, message: 'O campo price é obrigatório' }); }

    if (Number(price) < 0) { 
        const erro = { 
            status: 400, 
            message: 'O campo price deve ser um número maior ou igual a zero', 
        };
        return next(erro); 
    }

    next();
};

const descValidation = (req, _res, next) => {
    const { description } = req.body;
    const descBody = ['rating', 'difficulty', 'createdAt'];

    const hasDescBody = descBody.every((desc) => desc in description);

    if (!hasDescBody) { next({ status: 400, message: 'todos os campos são obrigatorios' }); }

    const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

    if (!description.createdAt.match(isFormatDate)) { 
       next({ status: 400, message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' }); 
    }

    next();
};

module.exports = { 
    nameValidation, 
    priceValidation,
    descValidation,
};