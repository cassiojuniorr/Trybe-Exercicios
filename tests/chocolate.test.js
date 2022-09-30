const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
// const mockChocola = require('./mock/mockChocola');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testando API', function () {
    it('show chocolates', async function () {
        const response = await chai
        .request(app)
        .get('/chocolates');

        expect(response.status).to.be.equal(200);
    });
});