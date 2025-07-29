# Use official node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Serve the production build using a lightweight server
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "5173"]
