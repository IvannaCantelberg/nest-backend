# Base image
FROM node:16-alpine


# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Build Vue.js app
# RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]