// src/components/ArticleList.js
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Timeout from "await-timeout";
import axios from "axios";

export default function ArticleList() {
  const initialArticles = [
    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ];
  const [articles, set_articles] = useState();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      Timeout.set(10000);
      // Getting back data from the net, through the wire, air, and the ocean:
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      console.log("Got back:", response.data);
      set_articles(response.data);
    }

    doSomeDataFetching();
  }, []); // its gonna fire depending on what we pass as second param

  // Second argument
  // [] -> Empty array  - fire only when component is mounted
  // null => Fire in every re render
  // [something] => when "something" is changed.

  const buttonTxt = hidden ? "Show articles" : "Hide articles";

  function resetToggle() {
    setHidden(!hidden);
    articles.length ? set_articles([]) : set_articles(initialArticles);
  }

  if (!articles) {
    return (
      <h2>
        <marquee>Loading ...</marquee>
      </h2>
    );
  }
  const articleCards = articles.map((article) => {
    return <ArticleCard title={article.title} body={article.body} />;
  });

  return (
    <div>
      <button onClick={resetToggle}>{buttonTxt}</button>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {!hidden && articleCards}
    </div>
  );
}

// {!hidden && articleCards}  <-- this resolves to value on the rigth if both are true, if one is not (ex. !hiddens ===false) then doesnt show articles at all
