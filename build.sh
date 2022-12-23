#!/bin/bash
npm install
rm -rfv ./**dist
rm -rfv ./**build
npm run build
cd ./backend
npm install
npm run build
mkdir ./dist/static
cd ..
cp -R build/* ./backend/dist/static
mv ./backend/dist .
rm -rfv ./**build