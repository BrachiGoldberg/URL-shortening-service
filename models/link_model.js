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
    clicks: [
        {
            date: Date,
            ipAddress: string
        }
    ]
})

export default mongoose.model('Link', LinkSchema)