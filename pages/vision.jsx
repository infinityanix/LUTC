import { Layout } from "../components/Layout";

export default function Vision(props) {
  return (
    <Layout title="LUTC : Vision">
      <section className="pb-5">
        <div className="container">
          <div className="heading-main mt-5">
            <h1 className="display-4 heading ">Our Vision</h1>
          </div>
          <p className="lead mt-2">
            Vision of the Leading University Tourist Club: To create a community
            where tourism students and leaders can maintain a proactive network
            and also can help each other to develop a better platform for
            themselves. Mission of the Leading University Tourist Club: To
            develop scopes for the tourism students with different industry
            experts and to provide practical experience and skill improvement
            opportunities for the students by maintaining proper communication
            with industry leaders.
          </p>
          <h4 className="mt-5">OBJECTIVES:</h4>
          <p>
            Leading University Tourist Club works with the following objectives:
          </p>
          <ul className="lists">
            <li>
              To create a platforms for sharing and exchanging the ideas and
              experiences regarding tourism related activities.
            </li>
            <li>
              To work with regional and national tourism organizations
              collectively for the development of tourism and promoting the
              dept. of THM
            </li>
            <li>
              Making collaboration with different industry expert for the
              betterment of the students of the department of THM.
            </li>
            <li>
              To research on tourism, discover the tourism potential spots and
              generate awareness in preserving tourism products.
            </li>
            <li>
              To bring all the tourism related private and public bodies under
              one umbrella to work collectively.
            </li>
          </ul>

          <h4 className="mt-5">Major Activities to be organized:</h4>
          <ol className="lists">
            <li>Arranging seminars and workshops for the students.</li>
            <li>
              Organize and execute tour plan to experience real-life learning.
            </li>
            <li>Arranging tourism fair.</li>
            <li>Organizing different tourism related competitions.</li>
          </ol>
        </div>
      </section>
    </Layout>
  );
}
