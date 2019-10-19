# Welcome to Artesgo Foundation

## App Build

`npm run build`

This builds the deployable package for the app

`npm run build:lib`

This builds the publishable package for our lib

The build script also includes functionality to copy over reused scss partials with the `cp` and `rsync` commands

Note: `rsync` only works for single level directories. it will not copy over subdirectories inside `styles`

`rsync -r` is then used to make the process recursive

## App Deployment: Firebase deploy

`cd dist/apps`

you should see firebase files

`firebase deploy`

## Package.json

