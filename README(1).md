# Case Desk: setup

Four files: `index.html` (the app), `config.js` (your project keys), `schema.sql` (database), this README.

Open `index.html` without filling in `config.js` and it runs in preview mode with sample data, so you can click through every screen and switch roles with "Preview as". Nothing is saved in preview.

## 1. Database (about 5 minutes)

1. In `schema.sql`, change `your.email@xox.com.my` on the last lines to your own login email.
2. Supabase > SQL Editor > paste the whole file > Run.
   Everything is prefixed `crm_`, so it can live in the same project as the QA and dashboard tools.

## 2. Keys

Supabase > Project Settings > API. Copy the Project URL and the anon (publishable) key into `config.js`.

## 3. Hosting

Upload `index.html` and `config.js` to a GitHub Pages repo or Netlify site (same as your other tools). Then in
Supabase > Authentication > URL Configuration, add the site address (for example `https://xoxcc.github.io/case-desk/`)
to **Redirect URLs**. Password-reset links only work for addresses listed there.

## 4. Staff logins

- Staff sign in with email and password. If the project already has a login for someone (from the QA tool or dashboard), the same login works here.
- New person: Supabase > Authentication > Users > Add user (send invite, or create with a temporary password).
- Then add the same email in the app under **Team & lists** with their role. People not on that list see "You're not on the team list yet" and the database returns nothing to them.
- Removing access: untick **Active**. Their past cases stay in reports.

Optional Microsoft sign-in: set up the Azure provider in Supabase (redirect URI `https://<project>.supabase.co/auth/v1/callback`,
Tenant URL set to the XOX tenant so outside Microsoft accounts can't sign in), then set `microsoftSignIn: true` in `config.js`.

## 5. Email delivery

Supabase's built-in email sender is limited to a few emails per hour, which is not enough for invites or resets for a team of ~37.
Set a custom SMTP server under Authentication > Emails > SMTP Settings before rollout.

## Who can do what

| | Staff | Supervisor | Manager |
|---|---|---|---|
| Lodge cases | yes | yes | yes |
| See all cases and earlier history | yes | yes | yes |
| Edit a case | own only | all | all |
| Delete a case | no | no | yes |
| Report | own | team | team |
| Team, topics, channels | no | no | yes |

These rules are enforced in the database (row level security), not just hidden in the page.

## Topics

Start empty on purpose. Add them in the app under **Team & lists**, one per line. Until topics exist, staff can lodge cases without one.
