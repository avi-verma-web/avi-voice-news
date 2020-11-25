import React from "react";
import { Grow, Grid } from "@material-ui/core";


//styling
import useStyles from "./styles";

//components
import NewsCard from "../NewsCard/NewsCard";
import Home from '../Home/Home'


const NewsCards = ({ articles, activeArticle }) => {
  console.log("Here")
  const classes = useStyles();

  if(!articles.length){
    return (<Home></Home>)
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard
              article={article}
              activeArticle={activeArticle}
              i={i}
            ></NewsCard>
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
