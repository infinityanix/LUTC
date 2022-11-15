import { Layout } from "../components/Layout";

export default function Event(props) {
  return (
    <Layout title="LUTC : Event">
      <div className="container-fluid mt-5 mb-5">
        <div className="heading-main mb-3">
          <h1 className="display-4 heading ">Events</h1>
        </div>
        <div className="row gx-3 gy-3">
          {events.reverse().map((event, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card">
                <img
                  src={event.imageUrl}
                  className="card-img-top"
                  style={{ height: "300px", width: "100%", objectFit: "cover" }}
                  alt={event.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

const events = [
  {
    title: "Tourism Fair 2019",
    body: "To celebrate 'World Tourism Day 2019' along with allits stakeholders, LUTC arranged two days Tourism Fair in 2019. Around 12 top-rated tour operators,travel agencies, airlines & other travel and tourism-related organizations arrived with their offers at this 'LUTC Tourism Fair-2019' to be a part of the celebration of World Tourism Day-2019 at Leading University.",
    imageUrl: "/images/events/tourism-fair.jpeg",
  },
  {
    title: "Sajek Valley 2019",
    body: `The club hosted their first study tour to Sajek Valley with the tagline "THM Voyagers are going for the first time to explore the "Queen of Hills" in 2019 along with 50 members of LUTC and faculties of the Departmentof Tourism and Hospitality Management.`,
    imageUrl: "/images/events/sajek.jpeg",
  },
  {
    title: "Campus Cleaning Program 2020",
    body: `Celebrating “Mujib Borsho” and create awareness about clean environment club has hosted a “Campus Cleaning Program -2020” with the tagline "পরিচ্ছন্ন দেশ গড়ি, মুজিব বর্ষ বরণ করি” at campus premises.`,
    imageUrl: "/images/events/campus-cleaning.jpeg",
  },
  {
    title: "Writing Competition 2021",
    body: `Thec lub has hosted “LUTC Writing Competition 2021” that offers an opportunity to the latent writing prodigies a chance to flourish. The writing contest was divided into two levels.
Level 1:For undergrad and postgrad students of Bangladesh.
Level 2:For college students of Bangladesh. Both winners' articles are published in this volume of Tourism magazine.`,
    imageUrl: "/images/events/writing-compitition.jpeg",
  },
  {
    title: "THM Vikings Tournaments 2021",
    body: "Leading University Tourist Club-LUTC organized the first-ever Tourism and Hospitality Management interdepartmental tournament from 7-9 December 2021, which included Chess,Football, Ludo, and UNO. This tournament took place on our university campus. To encourage students of the Department of Tourism and Hospitality Management in physical activities,the club organized an intra-department tournament named “THM Vikings Tournaments- 2021.",
    imageUrl: "/images/events/vikings-tournament.jpeg",
  },
  {
    title: "Industrial Tour 2021",
    body: "To gain industry realated knowledge and exeperience eco friendly adventures to life, LUTC had hosted one day long tour to TreeTop Adventures Firm in 2021.",
    imageUrl: "/images/events/industrial-tour.jpeg",
  },
  {
    title: "Saint Martin Island Study Tour 2022",
    body: "LUTC hosted their second study tour with 50 members of the LUTC along faculties of the department of Tourism and Hospitality Management to Saint Martin Island with thetagline “An escape to sandy shores”. It was 5days long educational excursion from 16thJanuary. to 21st January 2022.",
    imageUrl: "/images/events/st-martin.jpeg",
  },
];
