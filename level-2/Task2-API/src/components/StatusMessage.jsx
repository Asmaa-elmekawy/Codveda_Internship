import React from 'react';
import { AlertCircle, SearchX, Inbox } from 'lucide-react';

const StatusMessage = ({ type, message }) => {
  const configs = {
    error: {
      icon: <AlertCircle size={48} color="#f87171" />,
      title: 'Something went wrong',
      style: { color: '#f87171' }
    },
    empty: {
      icon: <SearchX size={48} color="var(--text-secondary)" />,
      title: 'No results found',
      style: { color: 'var(--text-secondary)' }
    },
    initial: {
      icon: <Inbox size={48} color="var(--text-secondary)" />,
      title: 'Start searching...',
      style: { color: 'var(--text-secondary)' }
    }
  };

  const { icon, title } = configs[type] || configs.initial;

  return (
    <div className="fade-in" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '4rem 2rem',
      textAlign: 'center',
      gap: '1rem'
    }}>
      {icon}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{title}</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>{message}</p>
    </div>
  );
};

export default StatusMessage;
