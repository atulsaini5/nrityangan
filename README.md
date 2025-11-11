<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/177qtpn1l-Icoa8a-tjTdU5gGvmxGUuNs

## Run Locally

**Prerequisites:**  Node.js 14+. Older LTS versions work fine with the downgraded Vite setup in this repo.


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Continuous integration

Pushes and pull requests automatically run `npm ci` and `npm run build` through the workflow in [.github/workflows/ci.yml](.github/workflows/ci.yml). The workflow now pins Node 14 to mirror production constraints.
