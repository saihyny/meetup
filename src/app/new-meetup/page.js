'use client';
import NewMeetupForm from "@/components/meetups/NewMeetupForm";



export default function NewMeetup (){
    const addMeetupHandler= (data)=>{
        console.log(data)
    }
  return (<NewMeetupForm onAddMeetup={addMeetupHandler}/>) 
}