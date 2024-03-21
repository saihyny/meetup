import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";
import Image from "next/image";

export default function Home() {
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

  return <MeetupList meetups={meetups} />;
}
