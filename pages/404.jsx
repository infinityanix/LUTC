import { Layout } from "../components/Layout";

export default function NotFound(props) {
  return (
    <Layout title="404 : Not Found">
      <div className="mt-5">
        <h1 className="display-4 text-center">
          <i
            className="bi bi-emoji-smile-fill"
            style={{ color: "#805d93" }}
          ></i>
          {"  "}
          Page Not Found!
        </h1>
      </div>
    </Layout>
  );
}
