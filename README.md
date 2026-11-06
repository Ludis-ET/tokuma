# TOKUMA (Tekumma) - Urban Mobility & Privacy Portal

Official landing page and privacy policy portal for the **TOKUMA** smart urban mobility and ride-hailing platform in Ethiopia.

## Features
- **Coming Soon Landing Page (`/`)**: Feature showcases, driver earnings highlights, early access waitlist, and Google Play / App Store arrival badges.
- **Privacy Policy (`/privacy`)**: Google Play Store and Apple App Store compliant privacy disclosures, including explicit foreground & background GPS location usage (`ACCESS_FINE_LOCATION`, `ACCESS_BACKGROUND_LOCATION`), account and personal data deletion request instructions, device permissions, and local fleet contact info in Addis Ababa.
- **Production-Ready Routing**: Built with Vite + React + React Router + Tailwind CSS with cPanel/Apache SPA `.htaccess` rewrites.

## Development

```bash
# Install dependencies
pnpm install

# Start local dev server
pnpm dev

# Build for production
pnpm build
```

## CI/CD Deployment to cPanel

This repository is equipped with an automated GitHub Actions workflow (`.github/workflows/cpanel-deploy.yml`) that builds and uploads the site directly to cPanel on every push to `main`.

### Required GitHub Secrets:
Configure these in **GitHub Repository Settings > Secrets and variables > Actions**:

| Secret Name | Description | Example |
|---|---|---|
| `FTP_SERVER` | Your cPanel hostname or IP address | `ftp.tokuma.et` or `tokuma.et` |
| `FTP_USERNAME` | Your cPanel FTP username | `deploy@tokuma.et` or cPanel user |
| `FTP_PASSWORD` | The FTP account password | `YourFtpPassword!` |
| `FTP_SERVER_DIR` | Target directory in cPanel | `public_html/` (or subdomain folder) |
