// Vercel Speed Insights integration for AI Boxing Book Empire
// This file provides Speed Insights tracking for the project

import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Vercel Speed Insights
// This will track web vitals and performance metrics when deployed to Vercel
injectSpeedInsights({
  debug: process.env.NODE_ENV === 'development',
  framework: 'vanilla-js'
});

console.log('Vercel Speed Insights initialized');

// Export for use in other modules if needed
export { injectSpeedInsights };
