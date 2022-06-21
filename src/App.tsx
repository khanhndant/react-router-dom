import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useHref,
} from "react-router-dom";
import Home from './components/home';
import ListBlogs from './components/listBlogs';
import DetailsBlog from './components/detailsBlog';
import Message from './components/Message';
import Tasks from './components/tasks';
import NotFound from './components/notfound';

function App() {
 
  return (
      <Router>
        <Routes>
            <Route path="/list-blogs" element={<ListBlogs />}/>
            <Route path="/details-blog/:blogId" element={<DetailsBlog />} />
            <Route path="/" element={<Home />} >
              <Route
                path="messages"
                element={<Message />}
              />
              <Route path="tasks" element={<Tasks />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
