import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export  async function POST(request,response) {
   
  
  try {
    const data = await request.json()

    const clint = await MongoClient.connect(process.env.mongoenv);
    const db = clint.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    clint.close()

    return NextResponse.json({ message: 'Meetup added' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 405 });
  } 
  
}
