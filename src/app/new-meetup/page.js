"use client";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import axios from "axios";
export default function NewMeetup() {
  const addMeetupHandler = async (data) => {
    const res = await axios.post('/meetup-route',data,{ headers: { 'Content-Type': 'application/json' }})
    if(res.status===201){
      const data =  res.data
      console.log(data)
    }else {
      console.log('error')
    }
   

  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
