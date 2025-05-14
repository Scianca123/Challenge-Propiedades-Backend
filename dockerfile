# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "run", "start:prod"]