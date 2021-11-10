import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import {useRouter} from 'next/router';
import Head from 'next/head';
import { Fragment } from 'react';

function Index()
{
    const router = useRouter();

    const onAddMeetup = async (meetup)=>{
        console.log('inside onAddMeetup method in new-meetup component, the entered data is ');
        console.log(meetup);
        const response = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseData = await response.json();
        console.log(responseData);
        router.replace('/');
    }

    
    return(
        <Fragment>
            <Head>
                <title>Add new meetup</title>
                <meta name='description' content='The page where you can add new Meetup' />
            </Head>
            <NewMeetupForm onAddMeetup = {onAddMeetup} />
        </Fragment>
    )
}

export default Index;