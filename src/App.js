import { Routes, Route } from "react-router-dom";
import { HomePage } from './components/homepage/homepage';
import { GithubRepo } from './components/github_repo/github_repo';
import NotFound from './components/404_error/404_error_page';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/github_repo">
          <Route index element={<GithubRepo />} />
          <Route path="github" element={<GithubRepo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
