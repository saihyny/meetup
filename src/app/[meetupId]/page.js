import React from 'react'
import classes from '../../components/meetups/MeetupItem.module.css'
import MeetupItem from '@/components/meetups/MeetupItem';
import {MongoClient } from 'mongodb'
 async function ShowDetails({params}) {
  const paramid = params.meetupId;

  const clint = await MongoClient.connect(process.env.mongoenv);

  const db = clint.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray()

  const data = meetups.map((item)=>{
    return {
      ...item,
      id:item._id.toString(),
    }
  })

  clint.close()

 
  const item = data.find((items)=>{
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