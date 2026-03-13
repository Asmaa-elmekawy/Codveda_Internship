import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import StatusMessage from './components/StatusMessage';
import useDebounce from './hooks/useDebounce';
import { searchRepositories } from './services/githubService';

function App() {
  const [query, setQuery] = useState('');
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const debouncedQuery = useDebounce(query, 600);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!debouncedQuery) {
        setRepos([]);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const data = await searchRepositories(debouncedQuery);
        setRepos(data.items);
        if (data.items.length === 0) {
          setError('no_results');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, [debouncedQuery]);

  return (
    <div className="app-container">
      <Navbar />
      
      <header style={{ padding: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="fade-in" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', background: 'linear-gradient(to right, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Explore the world of Open Source.
        </h1>
        <p className="fade-in" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2rem' }}>
          Fetch and search for thousands of GitHub repositories in real-time. Elegant, fast, and interactive.
        </p>
      </header>

      <SearchBar value={query} onChange={setQuery} isLoading={isLoading} />

      <main style={{ flex: 1 }}>
        {!isLoading && !error && repos.length > 0 && <RepoList repos={repos} />}
        
        {!isLoading && !debouncedQuery && (
          <StatusMessage type="initial" message="Type something in the search bar to discover amazing repositories." />
        )}

        {!isLoading && error === 'no_results' && (
          <StatusMessage type="empty" message={`We couldn't find any repositories matching "${debouncedQuery}"`} />
        )}

        {!isLoading && error && error !== 'no_results' && (
          <StatusMessage type="error" message={error} />
        )}
      </main>

      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        <p>© 2026 RepoExplorer. Built with React & GitHub API.</p>
      </footer>
    </div>
  );
}

export default App;
