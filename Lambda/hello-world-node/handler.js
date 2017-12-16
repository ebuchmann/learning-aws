'use strict';

module.exports.hello = (event, context, callback) => {
  console.log('Hi! Second update.');
  const response = {
    statusCode: 200,
    body: 'hello world',
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
