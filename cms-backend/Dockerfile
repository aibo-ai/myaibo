# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies for TypeScript build)
RUN npm ci

# Copy source code
COPY . .

# Clear Docker cache by forcing no cache build and explicitly copy updated tsconfig.json
COPY tsconfig.json ./tsconfig.json
RUN npm run build -- --force
# Create uploads directory
RUN mkdir -p uploads/images uploads/pdfs

# Expose port (Render will override this with PORT env var)
EXPOSE 10000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:${PORT:-10000}/api/health || exit 1

# Start the production server
CMD ["npm", "start"]
