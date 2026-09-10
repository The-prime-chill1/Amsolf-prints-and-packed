const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src');

try {
  fs.renameSync(path.join(baseDir, 'pages/PrivacyPolicy.jsx'), path.join(baseDir, 'pages/SitePolicy.jsx'));
  fs.renameSync(path.join(baseDir, 'pages/PrivacyPolicy.css'), path.join(baseDir, 'pages/SitePolicy.css'));
} catch (e) {
  console.log("Rename error:", e);
}

const sitePolicyPath = path.join(baseDir, 'pages/SitePolicy.jsx');
if (fs.existsSync(sitePolicyPath)) {
  let jsxContent = fs.readFileSync(sitePolicyPath, 'utf8');
  jsxContent = jsxContent.replace(/PrivacyPolicy\.css/g, 'SitePolicy.css');
  jsxContent = jsxContent.replace(/export default function PrivacyPolicy/g, 'export default function SitePolicy');
  fs.writeFileSync(sitePolicyPath, jsxContent);
}

const appJsxPath = path.join(baseDir, 'App.jsx');
if (fs.existsSync(appJsxPath)) {
  let appContent = fs.readFileSync(appJsxPath, 'utf8');
  appContent = appContent.replace(/PrivacyPolicy/g, 'SitePolicy');
  fs.writeFileSync(appJsxPath, appContent);
}

console.log("Fix completed.");
