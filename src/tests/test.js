const api = require('../app/api');
const printer = require ('../config/support/logger');

describe('Test suite for main page', function () {

    async function logInProgress(){
       printer.print('IT', `In progress...:  ${this.test.title} `);
    }

    beforeEach( async function () {
    
        await printer.print('IT', `Start exesuting of test: ${this.currentTest.title} `);

    });

    afterEach(async function () {
        await printer.print('IT', `Finish exesuting of test: ${this.currentTest.title}`);
    });

    it('API articlesMostReading (TBD SCHEMA)', async function () {
        await logInProgress.call(this);
        const resp = await api.articlesMostReading.getSummary();
        api.expect(resp.status).to.equal(200);
        api.expect(resp.data).to.be.jsonSchema(api.schema.articlesMostReadingSchema);
    });

    it('API salaryDistribution', async function () {
        await logInProgress.call(this);
        const resp = await api.salaryDistribution.getSummary();
        api.expect(resp.status).to.equal(200);
        api.expect(resp.data).to.be.jsonSchema(api.schema.salaryDistributionSchema);

    });

    it('API Docs', async function () {
        await logInProgress.call(this);
        const resp = await api.docs.getSummary();
        api.expect(resp.status).to.equal(200);
        api.expect(resp.data).to.be.jsonSchema(api.schema.docsSchema);

    });
});