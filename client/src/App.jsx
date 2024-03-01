import { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import Home from "./pages/user/Home";
import Posts from "./pages/user/Posts";
import Likes from "./pages/user/Likes";
import Contact from "./pages/user/Contact";
import Notification from "./pages/user/Notification";
import Register from "./pages/user/Register";
import Buys from "./pages/user/Buys";
import Rent from "./pages/user/Rent";
import Login from "./pages/user/Login";
import PrivateRouter from "./routes/PrivateRouter";
import Dashboard from "./pages/admin/Dashboard";
import PostsList from "./pages/admin/PostsList";
import CreatePost from "./pages/admin/CreatePost";
import CreateBuy from "./pages/admin/CreateBuy";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route to="/" element={<PublicRouter />}>
          <Route index element={<Home />}></Route>
          <Route path="rent" element={<Rent />}></Route>
          <Route path="posts" element={<Posts />}></Route>
          <Route path="buys" element={<Buys />}></Route>
          <Route path="likes" element={<Likes />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="notification" element={<Notification />}></Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="posts-list" element={<PostsList />}></Route>
          <Route path="create-post" element={<CreatePost />}></Route>
          <Route path="create-buy" element={<CreateBuy />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
