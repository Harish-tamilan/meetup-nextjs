import MeetupList from '../components/meetups/MeetupList';
import { Fragment} from 'react';
import Head from 'next/head';

export async function getStaticProps(){
    const response = await fetch('https://api.zolostays.com/student/housing/api/v1/landingPage');
    const responseData = await response.json();
    const data = responseData.data;
    console.log(data);
    const cities = data.opening_count_in_cities;
    const job_function = data.opening_count_by_job_function;
    const arr = [];

    cities.map((city)=>(arr.push({
        title:'Opening in City',
        address:city.location,
        image:city.image_url,
        id:'Z1'
    }))
    );

    job_function.map((city)=>(arr.push({
        title:'Opening by Job Function',
        address:city.job_function,
        image:city.image_url,
        id:'Z1'
    }))
    );






    return{
        props:{
            meetups:arr
        }
    }
}

function zolostays(props)
{
    console.log('inside zolostays');
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

export default zolostays;