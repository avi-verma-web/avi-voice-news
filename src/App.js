import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";


//components
import NewsCards from "./components/NewsCards/NewsCards";

//Words to numbers
// import wordsToNumbers from "words-to-numbers";

//Alan AI
import alanBtn from "@alan-ai/alan-sdk-web";
const alanKey =
  "418ac45f40c3287c9d67927130c314f52e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);


  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
  }, []);

  const submit = () => {
    setNewsArticles([]);
  };

  return (
    <BrowserRouter>
      <Route path="/" exact>
        <h1 className="heading" onClick={submit}>
          Avi Alan AI news{" "}
        </h1>
        <NewsCards
          articles={newsArticles}
          activeArticle={activeArticle}
        ></NewsCards>
      </Route>
    </BrowserRouter>
  );
};

export default App;
