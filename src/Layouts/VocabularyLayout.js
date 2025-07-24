import React from 'react';
import { Outlet } from 'react-router-dom';

const VocabularyLayout = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <div className="container mx-auto px-4 py-8" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <div className="space-y-8" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'var(--color-section-title)' }}>Vocabulary and testing </h1>
          <div style={{ background: 'var(--color-bg-card)', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 var(--color-shadow)', padding: '1.5rem', color: 'var(--color-text)' }}>
            <div style={{ color: 'var(--color-text)' }}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyLayout; 