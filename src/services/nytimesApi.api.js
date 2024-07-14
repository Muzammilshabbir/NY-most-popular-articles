import {FETCH} from "../api/fetch";

export const fetchMostPopularArticles = async (period = 1) => {
  const url = `${period}.json`;
  try {
    const response = await FETCH.get({url});
    console.log('response :>> ', response);
    if(response)
    return response.results;
  } catch (error) {
    Promise.reject(error);
    console.error("Error fetching articles:", error);
  }
};
