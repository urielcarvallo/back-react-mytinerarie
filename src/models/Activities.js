const {Schema,model}=require('mongoose');
const moongose=require('mongoose');

const ActivitiesSchema = new Schema({
    id_itinerary:{type: moongose.Schema.ObjectId, ref:'Itinerary'},
    details:{type: Array},
    comment:{ type : Array}

});

module.exports= model("Activity",ActivitiesSchema)