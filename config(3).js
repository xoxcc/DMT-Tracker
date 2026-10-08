// Case Desk settings. Use the PUBLISHABLE key (starts with sb_publishable_) from Supabase > Project Settings > API Keys.
// The anon/publishable key is meant to be public; the database rules (schema.sql) protect the data.
window.CRM_CONFIG = {
  appName: "DMT Daily Activity Tracker",
  supabaseUrl: "https://jrfiyliesitsgnehxqtv.supabase.co",
  supabaseAnonKey: "sb_publishable_-AOpf0GlT5MeQh5-NMZc9g_CD2xu9Ch",
  // Show a "Sign in with Microsoft" button as well. Only turn on after the Azure provider is set up in Supabase.
  microsoftSignIn: false
};
