const BaseApi = require("../baseApi");

class ArticlesMostReading extends BaseApi {

async getSummary(){
    return this.get('kek/v2/articles/most-reading');
}

}

module.exports = ArticlesMostReading;