import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import { getArticles, deleteArticle } from "../api/articles";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setReload(false);
    getArticles(setArticles);
  }, [reload]);

  console.log("render Articles");
  return (
    <>
      <div className="  ">
        {articles.map((article) => {
          return (
            <Card key={article.id} className="m-4 w-100">
              <Card.Header className="p-3">
                <b>{article.title}</b>
              </Card.Header>
              <Card.Body>
                <Card.Text>{article.body}</Card.Text>

                <Button className="m-1" variant="contained" size="medium">
                  Edit
                </Button>

                <Button
                  className="m-1"
                  onClick={() => deleteArticle(article.id, setReload)}
                  variant="contained"
                  color="error"
                  size="medium"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Articles;
