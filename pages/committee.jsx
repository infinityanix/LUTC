import { Layout } from "../components/Layout";

export default function Committee(props) {
  return (
    <Layout title="LUTC : Committee">
      <div className="heading-main mt-5">
            <h1 className="text-center">Our Advisor</h1>
          </div>
          <p className="text-center">
            Md Abdul Halim
          </p>
      <div className="container mt-4 mb-5">
        <h4 className="text-center">Executive Committee</h4>
        <h4 className="text-center">Leading University Tourist Club-LUTC</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Designation</th>
              <th scope="col">Name</th>
              <th scope="col">ID</th>
            </tr>
          </thead>
          <tbody>
            {committee.map((member, idx) => (
              <tr key={idx}>
                <td>{member.designation}</td>
                <td>{member.name}</td>
                <td>{member.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

const committee = [
  {
    designation: "President",
    name: "Ashraful Hasan Chowdhury Towaha. | Galib Hossain Amran (Acting)",
    id: "1811100011 | 1811100002",
  },
  { designation: "Vice President", name: "Rudra Roy", id: "1811100019" },

  {
    designation: "Vice President",
    name: "Mahdi Redwan Mahee",
    id: "1811100010",
  },
  {
    designation: "General Secretary",
    name: "Shah Yasir Arafat",
    id: "1821100007",
  },
  { designation: "Treasurer", name: "Sayed Ahmed Anik", id: "1821100009" },
  {
    designation: "Joint Secretary",
    name: "Md. Kibria Talukder Mahi",
    id: "1821100018",
  },
  {
    designation: "Joint Secretary",
    name: "Musammath Mariya Khanom",
    id: "1821100003",
  },
  { designation: "Joint Secretary", name: "Prantha Debnath", id: "1821100013" },
  {
    designation: "Co- Organizing Secretary",
    name: "Saikot Chandra Dash",
    id: "1911100017",
  },
  {
    designation: "Co- Organizing Secretary",
    name: "Shah Nushrath Jahan sadiya",
    id: "1911100023",
  },
  {
    designation: "Co- Organizing Secretary",
    name: "Masrur Daiyan",
    id: "1911100013",
  },
  { designation: "Editorial Head", name: "Adnan Hasan", id: "1821100017" },
  {
    designation: "Associate Editor",
    name: "Md. Adib Bin Abdul Wahid",
    id: "1911100018",
  },
  { designation: "Executive Editor", name: "Usama Talukder", id: "2021100002" },
  {
    designation: "Executive Editor",
    name: "Md. Nahian Hasnat",
    id: "2011100013",
  },
  {
    designation: "Head of Promotion and Communication",
    name: "Nasir Ahmed Fahim",
    id: "1911100010",
  },
  {
    designation: "Deputy Head of Promotion and Communication",
    name: "Ahmed Sakib Chowdhury",
    id: "1911100027",
  },
  {
    designation: "Media & Photography Associate",
    name: "Arifur Rahman Mahi",
    id: "1911100004",
  },
  {
    designation: "Promotion and Communication Associate",
    name: "Dewan Nazrul Amin Raja",
    id: "1921100008",
  },
  {
    designation: "Promotion and Communication Associate",
    name: "Md. Kawsar Ahmad",
    id: "1921100002",
  },
];
