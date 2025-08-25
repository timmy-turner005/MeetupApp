//api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://timmy005:winxclub005@cluster0.jifjwxd.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log("Received new meetup:", data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;
