#!/bin/bash
BRANCH=$1

echo "Deploying branch $BRANCH..."

git fetch origin $BRANCH
git checkout $BRANCH
git pull origin $BRANCH

composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan queue:restart

echo "✅ Deploy $BRANCH done!"
echo "-----------------------------------"
