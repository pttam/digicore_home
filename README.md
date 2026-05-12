# Running the Vite React Site

## Prerequisites
- Node.js (>=20) – recommended via nvm
- npm (or pnpm/yarn)

**Node version management**
If you are on an older Node version, install nvm and use it to get Node 20:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc   # or ~/.zshrc
nvm install 20
nvm use 20
nvm alias default 20   # optional
```
Create an `.nvmrc` file so the repo pins the version:
```bash
echo "20" > .nvmrc
```

## Steps to start the development server

**Asset placement**
- Place static assets (images, fonts, etc.) in the `public/` directory. Vite will serve them at the root URL. For example, move the logo to `public/images/logo.png` and reference it as `/images/logo.png` in your code.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
   The app will be served at `http://localhost:3000` (or the WSL IP if accessing from Windows).

## Optional: Build and preview production output
```bash
npm run build   # creates a `dist/` folder
npm run preview # serves the built files locally
```