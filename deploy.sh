#!/bin/bash
echo "🚀 Building and deploying RescueRepo Client Acquisition..."
npm run build &&
npx gh-pages -d dist -r https://$GH_TOKEN@github.com/leonidas-esquire/RescueRepo-Client-Acquisition.git -b gh-pages &&
echo "✅ Deployment complete! Visit:"
echo "🌐 https://leonidas-esquire.github.io/RescueRepo-Client-Acquisition/"
