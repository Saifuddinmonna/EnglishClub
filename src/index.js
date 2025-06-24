import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ১. QueryClient এর একটি নতুন ইন্সট্যান্স তৈরি করা হলো।
// এখানে আপনি ডিফল্ট অপশনও সেট করতে পারেন।

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // ৫ মিনিট পর্যন্ত ডেটা ফ্রেশ থাকবে
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    {/* ২. QueryClientProvider দিয়ে পুরো অ্যাপকে Wrap করা হলো */}
    {/* এবং client prop এ queryClient ইন্সট্যান্সটি পাস করা হলো */}
   
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
); 