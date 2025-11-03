# --------------------------
# Stage 1: Builder
# --------------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies)
RUN npm ci --no-audit

# Copy project files
COPY . .

# Disable Next.js telemetry and ensure clean build
ENV NEXT_TELEMETRY_DISABLED=1

# Clear previous build cache completely before building
RUN rm -rf .next node_modules/.cache && npm run build

# --------------------------
# Stage 2: Production Runner
# --------------------------
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only what's needed for production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Healthcheck (optional but useful)
HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Expose Next.js default port
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "start"]
