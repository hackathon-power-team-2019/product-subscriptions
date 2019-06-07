'use strict';
const doc = require('dynamodb-doc');
const dynamo = new doc.DynamoDB();

const uuidv1 = require('uuid/v1');

exports.handler = (event, context, callback) => {
    console.log(uuidv1());
    dynamo.putItem({
        TableName: "product-subscriptions",
        Item: {
            id: uuidv1(),
 //           "productCode": event.productCode,
 //           "productName": event.productName
             ':email': { 'S': event.email },
             ':productCode': { 'S': event.productCode },
             ':productName': { 'S': event.productName }            
        }
    }, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(null, {
                statusCode: '500',
                body: err
            });
        } else {
            callback(null, {
                statusCode: '200',
                body: data
            });
        }
    });
};
