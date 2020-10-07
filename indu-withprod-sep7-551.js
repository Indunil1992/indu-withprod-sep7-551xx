const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const sqs = new AWS.SQS();

exports.handler = async (event) => {
    debugger;
    try {
        let data = await sqs.receiveMessage({
            QueueUrl: `https://sqs.${process.env.AWS_DEFAULT_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/hiru-test`,
            MaxNumberOfMessages: 1,
            VisibilityTimeout: 30,
            WaitTimeSeconds: 0,
            AttributeNames: ['All']
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await s3.listObjects({
            Bucket: "induuuu",
            MaxKeys: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed rrr" };
};