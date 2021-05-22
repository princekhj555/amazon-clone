import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AMAZON Clone</title>
      </Head>
      
      {/* Header */}
      <Header/>
    </div>
  );
}
