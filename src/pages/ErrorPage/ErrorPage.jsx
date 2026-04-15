import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Oops! Page Not Found</h2>
        <p style={styles.message}>
          The page you are looking for might have been removed or does not exist.
        </p>
        <button style={styles.button} onClick={() => navigate('/')}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    textAlign: 'center',
    padding: '50px',
    borderRadius: '15px',
    background: 'rgba(0,0,0,0.6)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },
  code: {
    fontSize: '100px',
    margin: 0,
  },
  title: {
    fontSize: '30px',
    margin: '20px 0 10px',
  },
  message: {
    fontSize: '16px',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '16px',
    background: '#fff',
    color: '#764ba2',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
  },
};

export default ErrorPage;