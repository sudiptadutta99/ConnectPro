import mongoose from "mongoose";

const PostSchema  = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    active: {
        type: Boolean,
        default: false, // Ensure default is a valid Boolean
    },
    
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "default.jpg",
    },
    createAt: {
        type: Date,
        default: Date.now, // Use Date.now to set the current timestamp
    },
    
    token : {
        type: String,
        default: '',
    }


});

const User = mongoose.model("User", PostSchema);

export default User;