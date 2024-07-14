
const ROUTES = {
  BASE_URL:`${import.meta.env.VITE_BASE_API_URL}`,
}  

const get = async ({ url, id = null, searchParams=null }) => {

  try {

    let headers = {};

    let promise = await fetch(`${ROUTES.BASE_URL}/${url}?api-key=${import.meta.env.VITE_NY_API_KEY}`, {
      method: "GET",
      headers,
    });
    if (promise.status === 200) {
      let res = await promise.json();
      return res;
    } else return null;
  } catch (error) {
    Promise.reject(error)
  }
};

const FETCH = {get}
export {FETCH, ROUTES};
