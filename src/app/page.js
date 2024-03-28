import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
export default async function Home() {

  const clint = await MongoClient.connect(process.env.mongoenv);

  const db = clint.db();

  const meetupsCollection = db.collection("meetups");

  const result = await meetupsCollection.find().toArray()

  const data = result.map((item)=>{
    return {
      ...item,
      id:item._id.toString(),
    }
  })
  

  clint.close()

  return <MeetupList meetups={data} />;
}