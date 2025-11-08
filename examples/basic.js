/**
 * Basic Example - Random Quote API
 *
 * This example demonstrates how to use the Random Quote API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const randomquoteAPI = require('../index.js');

// Initialize the API client
const api = new randomquoteAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
// This API does not require a Query

// Make the API request using callback
console.log('Making request to Random Quote API...\n');

api.execute(function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});
