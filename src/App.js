import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Post} path="/blog/:slug" />
        <Route component={Blog} path="/blog" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
