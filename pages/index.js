import Head from "next/head";
import "tailwindcss/tailwind.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>After-School STEM Coders</title>
        <link rel="icon" href="/SCSPrototype.png "/>
        <header className={"headerClass"}>
            <img className={"imageClass"} src={"SCSPrototype.png"} alt={"org logo"} ></img>
            <link rel="stylesheet" href="styles.css" type="text/css" charSet="utf-8"/>
            <style type={"text/css"}></style>

            <button className={"button button2"} type={"text/css"}>[1]Page</button>




        </header>
      </Head>
      <div className="h-screen bg-gray-500 flex justify-center items-center">
        <div className="text-3xl text-center">Coming Soon! UWU </div>
      </div>

      <footer></footer>
    </>
  );
};
export default Home;
