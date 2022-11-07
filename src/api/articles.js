import axios from "axios";

export const getArticles = async (setArticles) => {
  const URL_GET_ARTICLES = "http://localhost:3000/api/v1/articles";

  try {
    const res = await axios.get(URL_GET_ARTICLES);
    setArticles(res.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getArticle = async (id, setArticle) => {
  const URL_GET_ARTICLE = `http://localhost:3000/api/v1/articles/${id}`;
  try {
    const res = await axios.get(URL_GET_ARTICLE);
    setArticle(res.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createArticle = async (title, body) => {
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

export const deleteArticle = async (id, setReload) => {
  const URL_DELETE_ARTICLE = `http://localhost:3000/api/v1/articles/${id}`;
  try {
    const resp = await axios.delete(URL_DELETE_ARTICLE);
    setReload(true);
    console.log(resp);
  } catch (error) {
    console.log(error.message);
  }
};
