/**
 * Vercel Web Analytics Initialization
 * Official implementation for vanilla HTML/JavaScript projects
 * 
 * This script loads Vercel Web Analytics using the official CDN method.
 * The analytics script will automatically track page views and can be
 * used to send custom events via window.va().
 * 
 * Documentation: https://vercel.com/docs/analytics
 */

(function() {
  'use strict';
  
  // Initialize the Vercel Analytics queue
  window.va = window.va || function() {
    (window.vaq = window.vaq || []).push(arguments);
  };
  
  // Create and load the Vercel Analytics script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  
  // Insert the script into the document
  var firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else if (document.head) {
    document.head.appendChild(script);
  }
  
  // Optional: Log when analytics is loaded (useful for debugging)
  script.onload = function() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Vercel Analytics loaded (development mode)');
    }
  };
  
  script.onerror = function() {
    console.warn('Failed to load Vercel Analytics script');
  };
})();
