import handler from "./libs/handler-lib";
import dynamoDB from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params ={
        TableName: process.env.tableName,
        KeyConditionExpression: "userID = :userID",
        ExpressionAttributeValues: {
            ":userID": "124",
        },
    };
const result = await dynamoDB.query(params);
return result.Items;

});


