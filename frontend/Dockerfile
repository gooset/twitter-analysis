# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory to /front-end
WORKDIR /front-end

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Run npm start when the container launches
CMD ["npm", "start"]
