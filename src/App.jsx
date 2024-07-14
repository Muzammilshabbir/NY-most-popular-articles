import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>

          <Route
            path="/" 
            element={
                <ArticleList />
            }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
