import React from 'react'
import classes from '../../components/meetups/MeetupItem.module.css'
import MeetupItem from '@/components/meetups/MeetupItem';

function ShowDetails({params}) {
  const paramid = params.meetupId;

  const meetups = [
    {
      id: "m1",
      title: "A First Meetup",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/India-0037_-_Flickr_-_archer10_%28Dennis%29.jpg",
      address: "india , some state , some landmark",
      discription: "this is first discription",
    },
    {
      id: "m2",
      title: "A second Meetup",
      image: "https://swarajya.gumlet.io/swarajya/2018-12/21be82cb-f8c8-4083-bfb5-6593a7f0fbad/IISc_Main_Building.jpg?w=640&q=75&auto=format,compress&format=webp",
      address: "india  some state some landmark",
      discription: "this is second discription",
    },
    {
      id: "m3",
      title: "A third Meetup",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg",
      address: "india , some state , some landmark",
      discription: "this is third discription",
    },
  ];
  const item = meetups.find((items)=>{
    return items.id===paramid
  })
  return (
    <div className={classes.list}>
       <MeetupItem
          key={item.key}
          id={item.id}
          image={item.image}
          title={item.title}
          address={item.address}
        />
      </div>
  )
}

export default ShowDetails