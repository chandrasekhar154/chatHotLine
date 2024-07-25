const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3030;

app.get('/data', (req, res) => {
    const currentDate = new Date();
    const oldExpiryDate = new Date();
    oldExpiryDate.setFullYear(currentDate.getFullYear() - 1);
    console.log("Its called");

    const response = {
        id: uuidv4(),
        details: {
            name: 'Sample Entitlement',
            description: 'Expiry date updated.',
            oldExpiryDate: oldExpiryDate.toISOString(),
            newExpiryDate: currentDate.toISOString(),
        }
    };
    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
