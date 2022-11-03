import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
import axios from "axios";

const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  const createArticle = async () => {
    const URL_CREATE_ARTICLE = "http://localhost:3000/api/v1/articles";
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);

    // fetch(URL_CREATE_ARTICLE, {
    //   method: "POST",
    //   body: formData,
    // }).then((result) => {
    //   result.json().then((resp) => {
    //     console.log(resp);
    //   });
    // });

    try {
      // const result = await axios.post(URL_CREATE_ARTICLE, formData );
      const result = await axios.post(URL_CREATE_ARTICLE, { body, title });
      console.log(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setBodyError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (body === "") {
      setBodyError(true);
    }
    if (title && body) {
      // console.log(title, body);
      createArticle();
    }
  };

  return (
    <div className="container ">
      <div className="m-3">
        <Typography
          variant="h4"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Create New Article
        </Typography>
        <div className="my-3">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              className="my-3"
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
              variant="outlined"
              color="primary"
              fullWidth
              required
              error={titleError}
            />
            <TextField
              className="my-3"
              onChange={(e) => setBody(e.target.value)}
              label="body"
              variant="outlined"
              color="primary"
              multiline
              rows={4}
              fullWidth
              required
              error={bodyError}
            />

            <Button
              className="my-3"
              type="submit"
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewArticle;
