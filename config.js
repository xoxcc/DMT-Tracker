// Case Desk settings. Fill in from Supabase > Project Settings > API.
// The anon/publishable key is meant to be public; the database rules (schema.sql) protect the data.
window.CRM_CONFIG = {
  appName: "Case Desk",
  supabaseUrl: "https://jrfiyliesitsgnehxqtv.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyZml5bGllc2l0c2duZWh4cXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2ODAwNjAsImV4cCI6MjA5NTI1NjA2MH0.ZO-4OYF9_1NRduLZlKiSVStOfg07W4Ozx7vhvUTuozA",
  // Show a "Sign in with Microsoft" button as well. Only turn on after the Azure provider is set up in Supabase.
  microsoftSignIn: false
};
