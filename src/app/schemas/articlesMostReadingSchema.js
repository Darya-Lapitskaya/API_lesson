
// const articlesMostReadingSchema = {
//     title: 'Schema for kek/v2/articles/most-reading',
//     type: 'object',
//     required: ['articles', 'promoPost'],
//     additionalProperties: false,
//     properties: {
//         articles: {
//             type: 'object',
//             required: ['articleIds', 'articleRefs'],
//             additionalProperties: false,
//             properties: {
//                 articleIds: { type: 'array' },
//                 articleRefs: {
//                     type: 'object',
//                     required: [
//                         "author",
//                         "checked",
//                         "editorVersion",
//                         "flows",
//                         "hubs",
//                         "id",
//                         "isCorporative",
//                         "lang",
//                         "leadData",
//                         "plannedPublishTime",
//                         "postLabels",
//                         "postType",
//                         "relatedData",
//                         "statistics",
//                         "status",
//                         "timePublished",
//                         "titleHtml"
//                     ],
//                     additionalProperties: false,
//                     properties: {
//                         author: {
//                             type: "object"
//                         },
//                         id: {
//                             type: "string",
//                             "format": "number"
//                         },
//                         timePublished: {
//                             type: "string",
//                             //"format": "date-time"
//                         },
//                         isCorporative: {
//                             type: "boolean"
//                         },
//                         lang: {
//                             type: "string",
//                         },
//                         titleHtml: {
//                             type: "string"
//                         },
//                         editorVersion: {
//                             type: "string"
//                         },
//                         postType: {
//                             type: "string"
//                         },
//                         postLabels: {
//                             type: "array",
//                         },
//                         author: {
//                             type: 'object',
//                         },
//                         statistics: {
//                             type: 'object',
//                         },
//                         hubs: {
//                             type: "array",
//                         },
//                         flows: {
//                             type: "array",
//                         },
//                         relatedData: {
//                             type: "null"
//                         },
//                         leadData: {
//                             type: 'object',
//                         },
//                         status: {
//                             type: 'string'
//                         },
//                         plannedPublishTime: {
//                             type: "null"
//                         },
//                         checked: {
//                             type: "null"
//                         },
//                     },



//                 },
//             }
//         },
//     promoPost: {
//         type: 'null',
//         required: ['title', 'link_url', 'type', 'lang', 'is_external', 'label'],
//         additionalProperties: false,
//         properties: {
//             title: { type: 'string' },
//             link_url: { type: 'string' },
//             type: { type: 'string' },
//             lang: { type: 'string' },
//             is_external: { type: 'number' },
//             label: { type: 'string' },
//         },
//     },

// }
// }



// module.exports = articlesMostReadingSchema;



const articlesMostReadingSchema = {
    "title": 'Schema for kek/v2/articles/most-reading',
    "type": 'object',
    "required": ['articles', 'promoPost'],
    "additionalProperties": false,
    "properties": {
        "articles": {
           "type": 'object',
            "required": ['articleIds', 'articleRefs'],
            "additionalProperties": false,
            "properties": {
                "articleIds": { "type": 'array' },
                "articleRefs": {
                    "type": 'object',
                  // propertyNames: "^[0-9]$"
                    "patternProperties": {
                        "^[0-9]$": { "type": "boolean" }
                    },

                },

            }
        },

        promoPost: {
            type: 'null',
            required: ['title', 'link_url', 'type', 'lang', 'is_external', 'label'],
            additionalProperties: false,
            properties: {
                title: { type: 'string' },
                link_url: { type: 'string' },
                type: { type: 'string' },
                lang: { type: 'string' },
                is_external: { type: 'number' },
                label: { type: 'string' },
            },
        },

    }
}


module.exports = articlesMostReadingSchema;

