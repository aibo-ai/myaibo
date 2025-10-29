# 🐳 Docker Setup for MyAibo CMS

## **Quick Start with Docker**

### **1. Build and Run the CMS Backend**

```bash
# Build the Docker image
docker-compose build

# Start the CMS backend
docker-compose up -d

# Check if it's running
docker-compose ps

# View logs
docker-compose logs -f cms-backend
```

### **2. Test the Docker Setup**

```bash
# Test health endpoint
curl http://localhost:3001/api/health

# Test Supabase connection
curl http://localhost:3001/api/test-supabase

# Test login
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@myaibo.in", "password": "admin123"}'
```

### **3. Production Deployment**

#### **Environment Variables**
The Docker setup uses these environment variables:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_SERVICE_KEY`: Your Supabase service key
- `JWT_SECRET`: Secret for JWT token signing
- `NODE_ENV`: Set to `production`

#### **Security Notes**
- Change `JWT_SECRET` in production
- Use environment variables for sensitive data
- Consider using Docker secrets for production

### **4. Docker Commands**

```bash
# Stop the services
docker-compose down

# Rebuild and restart
docker-compose up --build -d

# View logs
docker-compose logs cms-backend

# Access container shell
docker-compose exec cms-backend sh

# Remove everything (including volumes)
docker-compose down -v
```

### **5. Production Considerations**

#### **For AWS/GCP/Azure:**
1. Use managed databases (RDS, Cloud SQL, etc.)
2. Use container orchestration (ECS, GKE, AKS)
3. Set up load balancers
4. Configure auto-scaling
5. Use secrets management

#### **For Heroku:**
```bash
# Create Heroku app
heroku create myaibo-cms

# Set environment variables
heroku config:set SUPABASE_URL=https://prtzzptquzbivmcihudq.supabase.co
heroku config:set SUPABASE_SERVICE_KEY=your_service_key
heroku config:set JWT_SECRET=your_jwt_secret

# Deploy
git push heroku main
```

### **6. Health Monitoring**

The Docker setup includes health checks:
- **Health endpoint**: `/api/health`
- **Check interval**: 30 seconds
- **Timeout**: 10 seconds
- **Retries**: 3 attempts

### **7. File Storage**

- **Local development**: Files stored in `./uploads`
- **Production**: Consider using cloud storage (S3, GCS, Azure Blob)
- **Docker volume**: `./uploads:/app/uploads`

## **Next Steps After Docker Setup**

1. ✅ **Docker Setup Complete**
2. 🔄 **Frontend Development** - Build React/Next.js frontend
3. 🔄 **API Integration** - Connect frontend to CMS APIs
4. 🔄 **Content Management** - Build admin dashboard
5. 🔄 **Production Deployment** - Deploy to cloud platform

## **Troubleshooting**

### **Common Issues:**

1. **Port already in use**:
   ```bash
   # Kill process using port 3001
   lsof -ti:3001 | xargs kill -9
   ```

2. **Docker build fails**:
   ```bash
   # Clean Docker cache
   docker system prune -a
   ```

3. **Environment variables not loading**:
   ```bash
   # Check environment variables
   docker-compose exec cms-backend env
   ```

4. **Supabase connection issues**:
   - Verify your Supabase URL and keys
   - Check if your Supabase project is active
   - Ensure database tables are created

## **Ready for Production! 🚀**

Your CMS backend is now containerized and ready for deployment to any cloud platform!
