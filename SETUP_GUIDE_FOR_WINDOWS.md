# Complete Setup Guide for Windows Users (No GitHub Account Needed)

## Prerequisites to Install First

Before opening Cursor, install these on your Windows computer:

1. **Node.js** (version 18 or higher)
   - Go to https://nodejs.org
   - Download the LTS version (left button)
   - Run the installer, click Next through all steps
   - Restart your computer after installation

2. **Git for Windows**
   - Go to https://git-scm.com/download/win
   - Download and run the installer
   - Use default settings, click Next through all steps
   - Restart your computer after installation

3. **Cursor IDE**
   - Go to https://cursor.sh
   - Download and install Cursor
   - Open Cursor after installation

---

## Option 1: Let Cursor AI Do Everything (Recommended)

Once you have the prerequisites installed and Cursor is open:

1. **Open Cursor**
2. **Press `Ctrl + L`** to open the AI chat
3. **Copy and paste this entire message into Cursor's chat:**

```
I need help setting up a Next.js project. Please do the following:

1. Clone this GitHub repository: https://github.com/da4aaa/Kat-travel-agency.git
   - Clone it to my Desktop or Documents folder
   
2. After cloning, navigate into the project folder

3. Install all dependencies using npm install

4. Start the development server using npm run dev

5. Tell me what URL to open in my browser to view the website

Please execute these steps for me and let me know if anything goes wrong.
```

4. **Press Enter** and wait for Cursor to complete all steps
5. **Open your browser** to the URL Cursor provides (usually http://localhost:3000/en)

---

## Option 2: Create Your Own GitHub Account First

If you want your own copy of the project to make changes:

### Step 1: Create a GitHub Account
1. Go to https://github.com/signup
2. Enter your email address
3. Create a password
4. Choose a username
5. Verify your email
6. Complete the signup process

### Step 2: Fork the Repository
1. While logged into GitHub, go to: https://github.com/da4aaa/Kat-travel-agency
2. Click the **"Fork"** button in the top-right corner
3. Click **"Create fork"**
4. Now you have your own copy at: `https://github.com/YOUR-USERNAME/Kat-travel-agency`

### Step 3: Let Cursor Clone YOUR Fork
Open Cursor and paste this into the AI chat (replace YOUR-USERNAME):

```
I need help setting up a Next.js project. Please do the following:

1. Clone this GitHub repository: https://github.com/YOUR-USERNAME/Kat-travel-agency.git
   - Clone it to my Desktop
   
2. After cloning, navigate into the project folder

3. Install all dependencies using npm install

4. Start the development server using npm run dev

5. Tell me what URL to open in my browser to view the website

Please execute these steps for me and let me know if anything goes wrong.
```

---

## What You'll See

After Cursor completes the setup:
- A folder called `Kat-travel-agency` on your Desktop
- The development server running in Cursor's terminal
- Instructions to open http://localhost:3000/en in your browser

---

## Common Issues and Solutions

### "npm is not recognized"
**Solution:** Node.js wasn't installed properly
- Close Cursor completely
- Restart your computer
- Reinstall Node.js from https://nodejs.org
- Reopen Cursor and try again

### "git is not recognized"
**Solution:** Git wasn't installed properly
- Close Cursor
- Restart your computer  
- Reinstall Git from https://git-scm.com/download/win
- Reopen Cursor and try again

### Port 3000 is already in use
**Solution:** Another app is using that port
- Cursor will automatically try port 3001, 3002, etc.
- Use whatever port number it suggests

### Permission errors
**Solution:** Run Cursor as Administrator
- Close Cursor
- Right-click on Cursor icon
- Select "Run as administrator"
- Try the setup again

---

## Making Changes to the Code

Once the project is running:

1. **Edit any file** in Cursor
2. **Save the file** (Ctrl + S)
3. **Refresh your browser** - you'll see the changes immediately!

You can ask Cursor's AI to make changes for you:
- "Change the primary color to red"
- "Add a new section to the homepage"
- "Update the contact email address"

---

## Stopping the Development Server

When you're done working:
1. Go to Cursor's terminal
2. Press `Ctrl + C` to stop the server
3. Type `Y` if asked to confirm

---

## Starting Again Later

Next time you want to work on the project:

1. Open Cursor
2. File → Open Folder → Select `Kat-travel-agency`
3. Open terminal (Ctrl + ~)
4. Run: `npm run dev`
5. Open browser to http://localhost:3000/en

Or just ask Cursor: "Start the development server for this project"

---

## Getting Updates from the Original Repository

If the original project gets updated and you want those changes:

Ask Cursor AI:
```
Please pull the latest changes from the original repository at https://github.com/da4aaa/Kat-travel-agency.git
```

---

## Need Help?

Just ask Cursor's AI! Examples:
- "The website isn't loading, can you help?"
- "How do I change the website colors?"
- "Install this new package for me: package-name"
- "Something broke, can you fix it?"

Cursor's AI can do almost everything for you!
