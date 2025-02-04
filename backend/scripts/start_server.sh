#!/bin/bash
echo "Stopping existing Node.js app..."
pkill -f "node server.js" || true  # Stops old backend process

echo "Starting backend..."
cd /var/www/html
npm start  # Starts new backend process
