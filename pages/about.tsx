import type { NextPage } from "next";
import Header from "../components/Header";
import ReactMarkdown from "react-markdown";
import * as matter from "gray-matter";

const Bio: NextPage = (posts) => {
  return (
    <div>
      {Header()}
      {/* <div className="page-content">this is about page</div> */}
      <div>
        <h2>About Us</h2>
        <p>
          Goeun and Quigley are two Millenials from the Midwest with absolutely
          no right to publicly declare their lukewarm pizza opinions around
          town. (Dead serious, we used to smear Ranch dressing and Velveeta on
          pies as teenagers.)
        </p>
        <p>Unfortunately, we know how to put a website on the Internet.</p>
        <br></br>
        <p>🐟 Goeun loves anchovies and hates pineapples on pizza.</p>
        <p>🍍 Quigley loves pineapples and hates anchovies on pizza.</p>
      </div>
    </div>
  );
};

export default Bio;
