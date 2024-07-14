import {useEffect, useState} from 'react'
import {fetchMostPopularArticles} from "../services/nytimesApi.api"
import React from 'react';

const ArticleList = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
      fetchData()
    },[])

    async function fetchData() {
      try {        
        const res = await fetchMostPopularArticles()
        setData(res)
      } catch (error) {
      }
    }
  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">NY Times Headlines</h1>
    <ul className="space-y-4">
      {data.map((article) => (
        <li key={article.id} className="p-4 border rounded-lg shadow">
          <a href={article.url} target='_blank' className="text-xl font-semibold text-blue-500 hover:underline">{article.title}</a>
          <p className="text-sm text-gray-600">{article.byline}</p>
          <p className="mt-2 text-gray-800">{article.abstract}</p>
          <p className="mt-2 text-gray-600">{article.published_date}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ArticleList