# # Stage 1: Build
# FROM node:18-alpine AS builder
# WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy source code and build
# COPY . .
# RUN npm run build

# # Stage 2: Production
# FROM node:18-alpine
# WORKDIR /app

# # Install only production dependencies
# COPY package*.json ./
# RUN npm install --production

# # Copy build output
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/next.config.js ./next.config.js

# EXPOSE 3000
# CMD ["npm", "start"]


# Stage 1: Dependencies
FROM node:18-alpine

WORKDIR /app

# Copy package files (Dockerfile is in frontend, so ./ works)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all frontend source code
COPY . .


# used standloan img
# RUN npm install sharp

# Build Next.js app
RUN npm run build


EXPOSE 3000

# start appication
CMD ["npm", "start"]
