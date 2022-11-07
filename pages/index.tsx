import Head from "next/head";

import site from "../site";

const Home = () => {
  const { title, description } = site;

  const metaTitle = `${title}: ${description.toLowerCase()}`;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
      </Head>

      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl">{title}</h1>
        <h2 className="text-xl">{description}</h2>
      </div>
    </>
  );
};

export default Home;