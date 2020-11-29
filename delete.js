import handler from "./libs/handler-lib";
import dynamoDB from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        Key: {
            userID: "124",
            notesID: event.pathParameters.id,
        },
    };
    await dynamoDB.delete(params);
    return {status: true};
});