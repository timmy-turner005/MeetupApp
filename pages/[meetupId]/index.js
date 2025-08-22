import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?s=612x612&w=0&k=20&c=yZJXNdzq3d5bKgvVzPBahBujpbVUXFyjyl9FN9L7esM="
      title="First Meetup"
      address="123 Main St, City, Country"
      description="This is the first meetup description."
    />
    // <Fragment>
    //   <img
    //     src=""
    //     alt="A First Meetup"
    //   />
    //   <h1>A First Meetup</h1>
    //   <address>123 Main St, City, Country</address>
    //   <p>This is the first meetup description.</p>
    // </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { meetupId: "m1" },
      },
      {
        params: { meetupId: "m2" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?s=612x612&w=0&k=20&c=yZJXNdzq3d5bKgvVzPBahBujpbVUXFyjyl9FN9L7esM=",
        id: "meetupId",
        title: "First Meetup",
        address: "123 Main St, City, Country",
        description: "This is the first meetup.",
      },
    },
  };
}

export default MeetupDetails;
