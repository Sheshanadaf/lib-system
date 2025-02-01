const AWS = require('aws-sdk');

// Set the region and configure DynamoDB
AWS.config.update({
  region: "ap-south-1", // Use your desired region
});

const docClient = new AWS.DynamoDB.DocumentClient();

// Function to get all items from DynamoDB
const getItems = async () => {
  const params = {
    TableName: "LibraryTable",  // Your DynamoDB table name
  };

  try {
    const data = await docClient.scan(params).promise();
    return data.Items;  // Return the items in the table
  } catch (error) {
    console.error("Error fetching data from DynamoDB:", error);
    throw error;
  }
};

module.exports = { getItems };
