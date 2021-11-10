import MeetupList from '../components/meetups/MeetupList';
import { Fragment, useEffect } from 'react';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const DUMMY_MEETUPS = [
    {
      id: 'm1',
      title: 'A First Meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Some address 5, 12345 Some City',
      description: 'This is a first meetup!',
    },
    {
      id: 'm2',
      title: 'A Second Meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Some address 10, 12345 Some City',
      description: 'This is a second meetup!',
    },
];

export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb+srv://harish:harish8249@cluster0.xacsm.mongodb.net/meetup?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetup');
    const resultData = await meetupCollection.find().toArray();
    console.log(resultData);
    client.close();
    return{
        props:{
            meetups:resultData.map((meetup)=>({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
                })
            )
        }
    }
}

function Index(props)
{
    return(
        <Fragment>
            <Head>
                <title>Meetup List</title>
                <meta name='description' content='List of Meetups' />
            </Head>
            <MeetupList meetups = {props.meetups} />
        </Fragment>
    )
}

export default Index;