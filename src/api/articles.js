import axios from "axios";
const url = "http://localhost:3000/api/v1/articles";

export const getArticles = async (setArticles) => {
  try {
    const res = await axios.get(url);
    setArticles(res.data);
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
