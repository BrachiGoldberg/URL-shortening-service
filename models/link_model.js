import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({
    link: {
        type: String,
        require: true,
    },
    counts: {
        type: Number,
        default: 0
    },
    clicks: {
        type: [
            {
                date: { type: Date, default: Date.now },
                ipAddress: { type: String },
                targetParamValue: { type: Number }
            }
        ],
        default: []
    },
    targetParamName: {
        type: String,
        default: "t"
    },
    targetValues: {
        type: [
            {
                name: { type: String },
                value: { type: Number }
            }
        ]
    }
})

export default mongoose.model('Link', LinkSchema)