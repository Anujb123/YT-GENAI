const mongoose = require('mongoose')

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is Required To be added in blacklist"]
    }
}, {
    timestamps: true
})

const TokenBlacklistModel = mongoose.model("blacklistTokens", blacklistTokenSchema)

module.exports = TokenBlacklistModel