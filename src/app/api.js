const BaseApi = require("./baseApi");
const chai = require('chai');
const ArticlesMostReading = require("./endpoints/articlesMostReading");
const SalaryDistribution = require("./endpoints/salaryDistribution");
const schema = require("./schemas/schema");
const Docs = require('./endpoints/docs');
chai.use(require('chai-json-schema'));

class Api extends BaseApi {

    expect = chai.expect;

    articlesMostReading = new ArticlesMostReading();
    salaryDistribution = new SalaryDistribution();
    docs = new Docs();
    schema = schema;

}

module.exports = new Api();