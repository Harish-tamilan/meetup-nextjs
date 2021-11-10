import { MongoClient } from "mongodb";

async function handler(req,res)
{
    console.log('get request came inside the meetups handler');
    const client = await MongoClient.connect('mongodb+srv://harish:harish8249@cluster0.xacsm.mongodb.net/meetup?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetup');
    const resultData = await meetupCollection.find().toArray();
    console.log(resultData);
    client.close();
    res.status(201).json({meetupData:resultData});

}

export default handler;