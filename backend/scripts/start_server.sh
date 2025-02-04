#!/bin/bash
echo "Stopping existing Node.js app..."
pkill -f "node server.js" || true  # Stops old backend process

echo "Starting backend..."
cd /var/www/html/

# Run server in the background to prevent script hang
nohup npm start > /var/www/html/server.log 2>&1 &

echo "Server started successfully!"
