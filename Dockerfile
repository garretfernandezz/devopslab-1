# Step 1: Use Node.js image
FROM node:16

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy all files
COPY . .

# Step 5: Build the project (React build)
RUN npm run build

# Step 6: Expose port (optional)
EXPOSE 3000

# Step 7: Start server (use serve to serve build folder)
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
