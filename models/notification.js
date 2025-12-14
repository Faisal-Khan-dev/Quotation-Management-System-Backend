const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        quotationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quotation",
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);