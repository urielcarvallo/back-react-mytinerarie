const ActivitiesCtrol={};
const Activities= require('../models/Activities.js')

ActivitiesCtrol.getActivities= async (req,res)=> {
    const Activity=await Activities.find();
    res.json(Activity)
}

ActivitiesCtrol.ActivitiesIDitinerary= async(req,res)=>{
    const id_Itinerary =req.params.id_itinerary;
    const Activity= await Activities.find({id_itinerary:id_Itinerary})
    console.log("controls",id_Itinerary)
    res.json(Activity)
}

ActivitiesCtrol.CreateActivities= async (req,res)=>{
    await new Activities({
                        id_itinerary:req.body.id_itinerary,
                        details:req.body.details,
                        comment:req.body.comment
                        }).save()

    res.json({message:'Guardado/Save'})
}

module.exports=ActivitiesCtrol;
