// Vercel Web Analytics Initialization
// This script initializes Vercel Web Analytics for the UniStop project

(function() {
  // Vercel Analytics injection function
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };

  // Load the Vercel Analytics script
  const script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  
  // Append to head
  if (document.head) {
    document.head.appendChild(script);
  } else {
    // Fallback: wait for head to be available
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(script);
    });
  }
})();
