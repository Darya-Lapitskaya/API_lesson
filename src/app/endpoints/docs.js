const BaseApi = require("../baseApi");

class Docs extends BaseApi {

async getSummary(){
    return this.get('kek/v2/docs', { params: { fl: 'ru', hl: 'ru', }}) ;
}

}

module.exports = Docs;