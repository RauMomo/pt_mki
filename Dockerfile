# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port that the app runs on
EXPOSE 1337

# Define the environment variable for the Node.js environment
ENV NODE_ENV=production

# Build the Strapi project
RUN npm run build

# Start the Strapi application
CMD ["npm", "start"]
