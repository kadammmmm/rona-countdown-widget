# 🚨 RONA Countdown Widget - Deployment Guide

A dramatically over-the-top countdown widget for Webex Contact Center that monitors agent state and provides an urgent visual countdown when RONA (Redirection on No Answer) is detected. After 30 seconds, automatically returns the agent to Available state.

## 📋 Table of Contents

1. [Features](#features)
2. [Quick Start](#quick-start)
3. [Local Development](#local-development)
4. [GitHub Pages Deployment](#github-pages-deployment)
5. [Desktop Layout Configuration](#desktop-layout-configuration)
6. [How It Works](#how-it-works)
7. [Customization](#customization)
8. [Troubleshooting](#troubleshooting)

---

## ✨ Features

- **Real-time RONA Detection**: Automatically detects when agent enters RONA state via Desktop SDK
- **Dramatic 30-Second Countdown**: Full-screen overlay with pulsing animations, screen shake, and escalating urgency
- **Visual Drama Meter**: Shows countdown intensity increasing as time runs out
- **Audio Alerts**: Beep sounds for initial alert and countdown ticks (last 10 seconds)
- **Auto-Recovery**: Automatically sets agent state to "Available" when countdown reaches zero
- **Recovery Confirmation**: Satisfying green success animation when recovered
- **Compact Header Display**: Shows current state and countdown in the Advanced Header area

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- GitHub account (for deployment)
- Webex Contact Center Administrator access

### Install & Build

```bash
# Clone or copy the widget files to your local machine
cd rona-countdown-widget

# Install dependencies
npm install

# Build the widget
npm run build

# The built widget will be in the dist/ folder
```

---

## 💻 Local Development

### Running Locally

```bash
# Start a local development server
npm run serve

# Opens at http://localhost:8080
```

### Demo Mode

When running outside of Webex Contact Center (no Desktop SDK available), the widget enters demo mode:

- **Double-click** the widget to trigger RONA countdown
- Use the on-screen demo controls to test functionality

### Watch Mode (Auto-rebuild)

```bash
npm run watch
```

---

## 📦 GitHub Pages Deployment

### Step 1: Create GitHub Repository

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit - RONA Countdown Widget"

# Create new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/rona-countdown-widget.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/dist** folder
5. Click **Save**

### Step 3: Get Your Widget URL

After a few minutes, your widget will be available at:

```
https://YOUR_USERNAME.github.io/rona-countdown-widget/rona-countdown-widget.js
```

---

## ⚙️ Desktop Layout Configuration

### Step 1: Access Desktop Layout in Control Hub

1. Log into [Webex Control Hub](https://admin.webex.com)
2. Navigate to **Contact Center** → **Desktop Layouts**
3. Select the layout to modify (or create a new one)
4. Click **Edit**

### Step 2: Add Widget to Advanced Header

Find the `advancedHeader` section in your Desktop Layout JSON and add the widget:

```json
{
  "advancedHeader": {
    "comp": "agentx-header",
    "widgets": {
      "right": [
        {
          "comp": "agentx-custom-widget",
          "script": "https://YOUR_USERNAME.github.io/rona-countdown-widget/rona-countdown-widget.js",
          "id": "rona-countdown-widget",
          "properties": {
            "tag": "rona-countdown-widget"
          }
        }
      ]
    }
  }
}
```

### Complete Layout Example

Here's a more complete example showing where the widget fits in a typical layout:

```json
{
  "appTitle": "Webex Contact Center",
  "logo": "",
  "taskPageIllustration": "",
  "stopNavigateOnAcceptTask": false,
  "dragDropEnabled": false,
  "notificationTimer": 8,
  "maximumNotificationCount": 3,
  "browserNotificationTimer": 8,
  "wxmConfigured": false,
  "desktopChatApp": {
    "webexConfigured": false
  },
  "headerActions": ["outdial", "notification"],
  "advancedHeader": {
    "comp": "agentx-header",
    "widgets": {
      "right": [
        {
          "comp": "agentx-custom-widget",
          "script": "https://YOUR_USERNAME.github.io/rona-countdown-widget/rona-countdown-widget.js",
          "id": "rona-countdown-widget",
          "properties": {
            "tag": "rona-countdown-widget"
          }
        }
      ]
    }
  },
  "area": {
    "advancedHeader": {
      "comp": "agentx-header"
    },
    "panel": {
      "comp": "agentx-wc-panel",
      "attributes": {
        "slot": "panel"
      },
      "children": []
    },
    "navigation": {
      "comp": "agentx-side-navigation",
      "attributes": {
        "slot": "nav"
      }
    }
  },
  "headless": {
    "id": "headless",
    "widgets": {}
  }
}
```

### Step 3: Assign Layout to Team

1. In Control Hub, go to **Contact Center** → **Teams**
2. Select the team
3. Under **Desktop Layout**, choose your updated layout
4. Save changes

### Step 4: Test

1. Log into Agent Desktop
2. You should see the RONA widget in the header showing current state
3. To test RONA behavior, let a call ring without answering

---

## 🔧 How It Works

### State Detection Flow

```
Agent Desktop Loads
        ↓
Widget Initializes Desktop SDK
        ↓
Subscribe to agentStateInfo.updated events
        ↓
On RONA state detected:
  → Start 30-second countdown
  → Display full-screen dramatic overlay
  → Play alert sounds
        ↓
If countdown reaches 0:
  → Call agentStateInfo.stateChange({ state: 'Available' })
  → Show recovery success animation
        ↓
If agent manually changes state before countdown:
  → Cancel countdown
  → Return to normal display
```

### Desktop SDK Integration

The widget uses these Webex Contact Center Desktop SDK methods:

```javascript
// Initialize
await Desktop.agentContact.init();

// Listen for state changes
Desktop.agentStateInfo.addEventListener('updated', callback);

// Get current state
const state = await Desktop.agentStateInfo.latestData;

// Change agent state (for auto-recovery)
await Desktop.agentStateInfo.stateChange({
  state: 'Available',
  auxCodeId: null
});
```

---

## 🎨 Customization

### Countdown Duration

In `rona-countdown-widget.js`, find and modify:

```javascript
_triggerRona() {
  this._countdown = 30; // Change to desired seconds
  // ...
}
```

### Visual Theme

Modify CSS variables at the top of the `styles` section:

```css
:host {
  --danger-red: #ff0a0a;      /* Main alert color */
  --danger-red-dark: #8b0000; /* Dark variant */
  --warning-orange: #ff6600;  /* Secondary warning */
  --warning-yellow: #ffcc00;  /* Critical warning */
  --safe-green: #00ff88;      /* Recovery/success */
  --background-dark: #0a0a0a; /* Overlay background */
}
```

### Disable Sound Effects

Comment out or remove these method calls:

```javascript
// In _triggerRona():
// this._playAlertSound();

// In countdown interval:
// if (this._countdown <= 10 && this._countdown > 0) {
//   this._playTickSound();
// }
```

### Reduce Drama Level

To make it less intense, you can:

1. Remove the shake effect by not setting `this._isShaking = true`
2. Remove scanlines by deleting the `.scanlines` div
3. Simplify animations in CSS

---

## 🐛 Troubleshooting

### Widget Not Appearing

1. **Check Console**: Open browser DevTools (F12) and look for errors
2. **Verify URL**: Ensure the script URL is accessible (try opening it directly)
3. **CORS Issues**: GitHub Pages should handle CORS, but verify no blocks
4. **Layout JSON**: Validate JSON syntax (use a JSON validator)

### RONA Not Detected

1. **SDK Not Ready**: Widget waits up to 10 seconds for SDK
2. **Check State Name**: Verify your system uses "RONA" (case-insensitive)
3. **Console Logs**: Widget logs state changes to console for debugging

```javascript
// Enable more verbose logging by adding to constructor:
console.log('[RONA Widget] Debug mode enabled');
```

### Auto-Recovery Not Working

1. **Permissions**: Agent may need permission to change own state
2. **API Errors**: Check console for API error responses
3. **State Codes**: Some systems require specific auxCodeId values

### Styling Conflicts

If widget styles conflict with desktop:

1. All styles are scoped to the custom element via Shadow DOM
2. If using older browsers, add more specific selectors
3. Check for global CSS that might leak into Shadow DOM

---

## 📁 Project Structure

```
rona-countdown-widget/
├── package.json           # Project dependencies
├── rollup.config.js       # Build configuration
├── src/
│   └── rona-countdown-widget.js  # Main widget source
├── dist/
│   ├── index.html         # Demo/test page
│   ├── rona-countdown-widget.js      # Built bundle
│   └── rona-countdown-widget.js.map  # Source map
└── README.md              # This file
```

---

## 🔗 Resources

- [Webex Contact Center Desktop SDK Documentation](https://developer.webex-cx.com/documentation/guides/desktop)
- [Desktop Layout Guide](https://developer.webex-cx.com/documentation/guides/desktop/desktop-layout)
- [Lit Element Documentation](https://lit.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

## 📝 License

MIT License - Feel free to modify and use in your organization!

---

**Questions?** Open an issue on GitHub or contact your Webex Contact Center administrator.
