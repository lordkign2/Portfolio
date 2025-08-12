import Head from "next/head";
import PortfolioHome from "@/components/PortfolioHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Full-stack developer portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PortfolioHome />
    </>
  );
}
