import React from 'react';
import RepoCard from './RepoCard';

const RepoList = ({ repos }) => {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
      gap: '1.5rem', 
      padding: '0 2rem 4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%'
    }}>
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
