# Use official node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy dependency files and install packages
COPY package*.json ./
RUN npm install

# Copy the rest of the backend
COPY . .

# Expose port used by backend
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
