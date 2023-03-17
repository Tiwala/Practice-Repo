# NOTES

tsc --init creates your tsconfig.json
- for handling ts settings in your project

npm init creates your package.json

mkdir src dist
- src is where you write your code, common standard for all your projects
- dist (distribution) is what is sent on to production and is served to the end user

We create a script src in the index.html pointing to index.js in dist
- everything in dist is generated, you don't normally do this but we're doing it in the practice for the hell of it

Uncomment "outDir": "./" in tsconfig.json
- What this does is that it specifies a folder for your output
- tell it that it goes to the dist file, via "./dist"
- How it works is that if you try to tsc src/index.ts, it won't update the index.js in dist, but if you do tsc -w (watch mode) it'll update tsc every time you make changes
- Ctrl + C to stop watch mode
- Even if you delete the index.js in dist, it'll recreate it if you save while watch mode is on

lite-server, live server, nodemon all work
- We're trying lite-server in this project
- We installed npm i lite-server and created a script activating it on npm start
- Remember to still run tsc -w so that tsc will look for the src folder and watch the ts file, updating and compiling to the dist folder