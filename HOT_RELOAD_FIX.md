# Quick Fix: Hot Reload Not Working

## The Problem

You're running the **production container** which doesn't support hot reload. Changes require a full rebuild.

## The Solution: Switch to Development Mode

### Step 1: Stop ALL containers

```powershell
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
```

### Step 2: Start Development Container

```powershell
docker-compose -f docker-compose.dev.yml up
```

**Keep this terminal open!** You'll see live logs here.

### Step 3: Open Browser

Go to: `http://localhost:3000`

### Step 4: Test Hot Reload

1. Edit `app/page.tsx`
2. Change the title
3. **Save the file**
4. Watch the terminal - you should see:
   ```
   ○ Compiling /page ...
   ✓ Compiled /page in 500ms
   ```
5. Browser auto-refreshes with changes!

---

## Alternative: If Docker Compose Doesn't Work

Run development server **without Docker**:

```powershell
# Install dependencies (if needed)
npm install

# Run dev server
npm run dev
```

Then edit files and see instant changes at `http://localhost:3000`

---

## Why Your Changes Aren't Showing

**Production Container:**

- Code is baked into the image
- Changes require full rebuild
- What you're currently using ❌

**Development Setup:**

- Code is mounted from your folder
- Changes appear instantly
- What you need ✅
