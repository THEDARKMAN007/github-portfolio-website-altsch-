import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/homepage/homepage";
import { GithubRepo } from "./components/github_repo/github_repo";
import NotFound from "./components/404_error/404_error_page";
import { Github } from "./components/github/github";
import { LogIn } from './components/login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<LogIn />} />
          <Route path="homepage" element={<HomePage />} />
        </Route>
        <Route path="/github_repo">
          <Route index element={<GithubRepo />} />
          <Route path="github" element={<Github />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
