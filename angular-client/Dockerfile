# Create image based on the official Node 8.9.1 image file from dockerhub
FROM node:8.9.1

# Create a directory where our the app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that the commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependencies
RUN npm install

# Copy the source code required to run the app
COPY . /usr/src/app

# Expose the port angular runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]