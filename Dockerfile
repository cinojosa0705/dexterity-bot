# Use the official Bun Docker image as a parent image
FROM thebunner/bun:latest

# Set the working directory
WORKDIR /app

# Copy the local code to the container
COPY . .

# Install Bun dependencies for your project
# Note: Bun automatically resolves and installs both dependencies and devDependencies
RUN bun install

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app using Bun
CMD ["bun", "run", "start"]
