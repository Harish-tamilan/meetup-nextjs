import { MongoClient } from "mongodb";

async function handler(req,res)
{
    console.log('request came inside');
    const data = req.body;
    const client = await MongoClient.connect('mongodb+srv://harish:harish8249@cluster0.xacsm.mongodb.net/meetup?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetup');
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({message:'Data inserted successfully'});

}

export default handler;