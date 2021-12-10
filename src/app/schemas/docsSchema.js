
const docsSchema = {
    title: 'Schema for kek/v2/docs',
    type: 'array',
    items: {
      type: "object",
      required: ['alias','name', 'pubArticlesCount'],
    additionalProperties: false,
    properties:{
        alias: {type: 'string'},
        name:{type: 'string'},
        pubArticlesCount:{type: 'number'},
      
    }
}
}

module.exports = docsSchema;