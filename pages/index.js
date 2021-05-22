import Head from "next/head";
import "tailwindcss/tailwind.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>After-School STEM Coders</title>
        <link rel="icon" href="/SCSPrototype.png "/>
        <header className={"headerClass"}>
            <ul>
                <lih><img href={""} className={"imageClass"} href={"/index.js"} src={"SCSPrototype.png"} alt={"org logo"}  ></img></lih>
                <lih>
                    <button className={"buttonHome button2"} type={"text/css"} >[1]Home</button>
                    <button className={"buttonFAQ button2"} type={"text/css"}>[2]F.A.Q</button>
                    <button className={"buttonIRC button2"} type={"text/css"}>[3]IRC</button>
                    <button className={"buttonLogin button2"} type={"text/css"}>[4]Login</button>
                </lih>
            </ul>





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
