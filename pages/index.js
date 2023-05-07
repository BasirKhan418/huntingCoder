import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Inter } from "next/font/google";
import Blog from "./Blog";
import Pricing from "./Components/Pricing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let hc ="<HuntingCoder/>"
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="Hunting coder a blog by coder for coder"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keyword" content="coding blog,hunting coder" />
      </Head>
      <main className="bg-red">
        <div className="d-flex justify-content-center flex-column align-items-center con con1">
          <h1 className="homeh2">
            Welcome To <span className="span">{hc}</span>
          </h1>
          <p className="homep">A blog by a coder for a coder</p>
          <Link href="/Blog" className="btn btn-primary my-2 btn"> Explore More</Link>
        </div>
        <div className="container">
          <Blog />
        </div>
        <Pricing/>
      </main>
    </>
  );
}
