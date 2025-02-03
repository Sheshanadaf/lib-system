cd /var/www/html

if [ -d "assets" ]; then
    sudo rm -rf assets
fi
sudo mv dist/* .
