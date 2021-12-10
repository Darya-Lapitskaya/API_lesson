const BaseApi = require("../baseApi");

class SalaryDistribution extends BaseApi {

async getSummary(){
    return this.get('kek/v2/inset/salary_distribution');
}

}

module.exports = SalaryDistribution;
