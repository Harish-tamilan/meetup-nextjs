import MeetupDetail from "../../components/meetups/MeetupDetail";
import { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import Head from 'next/head';

function Index(props)
{
    return(
        <Fragment>
            <Head>
                <title>{props.meetup.title}</title>
                <meta name='description' content={props.meetup.description} />
            </Head>
            <MeetupDetail image={props.meetup.image} title={props.meetup.title} address={props.meetup.address} description={props.meetup.description}/>
        </Fragment>
    )
}

export async function getStaticPaths()
{
    const client = await MongoClient.connect('mongodb+srv://harish:harish8249@cluster0.xacsm.mongodb.net/meetup?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetup');
    const responseData = await meetupCollection.find({},{_id:1}).toArray();
    client.close();
    console.log(responseData);
    return{
        fallback:'blocking',
        paths: responseData.map((meetup)=>({
            params:{meetupId:meetup._id.toString()},
        }))
    };
}

export async function getStaticProps(context)
{
    console.log('inside getStaticProps');
    const id = context.params.meetupId;
    const client = await MongoClient.connect('mongodb+srv://harish:harish8249@cluster0.xacsm.mongodb.net/meetup?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetup');
    const responseData = await meetupCollection.findOne({_id:ObjectId(id)});
    console.log(responseData);

    return{
        props:{meetup:{
            title: responseData.title,
            address: responseData.address,
            image: responseData.image,
            id: responseData._id.toString(),
        }}
    }
}

export default Index;

