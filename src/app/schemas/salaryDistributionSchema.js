
const salaryDistributionSchema = {
    title: 'Schema for kek/v2/inset/salary_distribution',
    type: 'object',
    required: ['average','data', 'halfYear','labels', 'max', 'median', 'min','profilesAmount', 'sourceUrl','year' ],
    additionalProperties: false,
    properties:{
        average: {type: 'number'},
        data:{type: 'array'},
        halfYear:{type: 'number'},
        labels: {type: 'array'},
        max:{type: 'number'},
        median:{type: 'number'},
        min:{type: 'number'},
        profilesAmount:{type: 'number'},
        sourceUrl:{type: 'string'},
        year:{type: 'number'},
    }

}

module.exports = salaryDistributionSchema;