'use strict';
const doc = require('dynamodb-doc');
const dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
    var params=  {
        TableName:'product-subscriptions',
        FilterExpression:'email = :email',
        ExpressionAttributeValues:{ ":email" : event.email }
    };

    dynamo.scan(params, function(err, data){
        if(err){
            callback(err, null);
        }else{
            callback(null, data);
        }
        
    });
};