const chai = require('chai');
const chaiHttp = require('chai-http');
const index = require('../src/index');
// const mockChocola = require('./mock/mockChocola');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testando API', function () {
    it('show chocolates', async function () {
        const response = await chai
        .request(index)
        .get('/chocolates');

        expect(response.status).to.be.equal(200);
    });
});