import { About } from "../components/About";
import { HomeCarousel } from "../components/HomeCarousel";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout title="LUTC : Home">
      <div>
        <HomeCarousel />
        <About />
      </div>
    </Layout>
  );
}
