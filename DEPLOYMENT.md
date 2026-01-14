# Deploying BikeBits Backend with Supabase Database

## Prerequisites
- Supabase account (https://supabase.com)
- Docker installed locally
- A hosting platform account (Railway, Render, Fly.io, or similar)

## Step 1: Set up Supabase Database

1. Go to https://supabase.com and create a new project
2. Wait for the database to be provisioned
3. Go to **Project Settings** > **Database**
4. Copy your connection details:
   - Host: `db.[your-project-ref].supabase.co`
   - Port: `5432`
   - Database: `postgres`
   - User: `postgres`
   - Password: [your database password]

## Step 2: Import Your Database Schema

Option A - Using Supabase SQL Editor:
1. Go to **SQL Editor** in Supabase dashboard
2. Copy your schema from `bikebits_backup.sql`
3. Run the SQL commands

Option B - Using psql:
```bash
psql "postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres" < bikebits_backup.sql
```

## Step 3: Deploy Backend Application

### Option A: Deploy to Railway (Recommended)

1. Go to https://railway.app
2. Click "New Project" > "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables:
   ```
   SUPABASE_DB_HOST=db.[your-project-ref].supabase.co
   SUPABASE_DB_PASSWORD=[your-database-password]
   PORT=3000
   ```
5. Railway will automatically detect your Dockerfile and deploy

### Option B: Deploy to Render

1. Go to https://render.com
2. Click "New" > "Web Service"
3. Connect your GitHub repository
4. Configure:
   - Environment: Docker
   - Add environment variables (same as above)
5. Click "Create Web Service"

### Option C: Deploy to Fly.io

1. Install Fly CLI: https://fly.io/docs/hands-on/install-flyctl/
2. Login: `fly auth login`
3. Launch app: `fly launch`
4. Set secrets:
   ```bash
   fly secrets set SUPABASE_DB_HOST=db.[your-project-ref].supabase.co
   fly secrets set SUPABASE_DB_PASSWORD=[your-database-password]
   ```
5. Deploy: `fly deploy`

## Step 4: Test Your Deployment

Once deployed, test your API:
- Health check: `https://[your-app-url]/health`
- API docs: `https://[your-app-url]/api`

## Important Notes

- Set `DB_SYNC=false` in production to prevent automatic schema changes
- Use connection pooling for better performance with Supabase
- Enable SSL for database connections in production
- Consider using Supabase's connection pooler for better scalability

## Troubleshooting

### Connection Issues
- Ensure your hosting platform's IP is not blocked by Supabase
- Check if SSL is required (Supabase requires SSL in production)
- Verify environment variables are set correctly

### Performance Issues
- Use Supabase's connection pooler: `[project-ref].pooler.supabase.com:6543`
- Enable connection pooling in TypeORM configuration
