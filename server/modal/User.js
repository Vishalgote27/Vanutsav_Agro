const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,

    },
    textMessage: {
        type: String,

    },
    mobile: {
        type: String,

    },
    eventTypes: {
        type: [String], // Array of strings for event types
        default: []    // Default to an empty array if not provided
    },
    plannedDate: {
        type: String,
        enum: ['Immediately', 'In 15 days', 'In 30 days', 'In 60 days'], // Specify valid options
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
