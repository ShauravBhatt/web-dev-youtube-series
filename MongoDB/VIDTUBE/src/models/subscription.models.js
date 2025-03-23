import mongoose , {Schema , model} from "mongoose";

const subscribeSchema = new Schema(
    {
        subscriber: {
            type : Schema.Types.ObjectId, //The person who is subscribing
            ref: "User"
        },
        channel: {
            type : Schema.Types.ObjectId, //Person to whom user is subscribing
            ref: "User"
        }
    },{timestamps:true}
)

export const Subscribe = model("Subscribe",subscribeSchema);