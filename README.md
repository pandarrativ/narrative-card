# REACT_STRUCTURE_TEMPLATE

## Description
Frontend is based on Node20 (node=v20.11.1, npm=10.2.3).

To manage and change Node version, you may use [nvm](https://github.com/nvm-sh/nvm)


## Setup
```shell
cd <Your_project_folder>/
nvm use
npm install
npm start
```

# Development Guidlines

## Naming Conversation
For each subsystem components/pages, files should start with your subsystem name. For general component/pages, you don't have to follow the rule.

For example, `HomePage.jsx` for Card system should be named as  `CardHomePage.jsx`. 


## Project Folder Structures
Create sub folders for better file maintainence if possible.
`src/assets`: put your static files such as images, videos, icons under this folder.
`src/components`: put your components under this foler.
`src/pages`: put your files of a whole page/view/controler under this folder and add it to `src/router.js` for page navigation.
`src/config`: put for configuration files or some constants under this folder.
`src/slicers`: put your Redux slicers/reducers in under this folder and add it to `src/store.js`.

For css files, create a folder for each page or component, and put you .jsx file and .css file under this project. (An example is `src/pages/CardHomePage`). For css styles which should be general to all projects, place it under `app.css` or `index.css`

For icons, it is recomended link the icon in your code instead of downloaded into project (such as using third parties like `Heroicons`). If you do need some icons to be downloaded:
 - for icons specific to a component or page, palce it under the folder with your `.jsx` and `.css`.
 - for icons of general purpuse or used by many files, place it under `src/assets/icons/`


## Routers
Use [React-Router](https://reactrouter.com/en/main) for page navigation.

Write your views/pages into Routers of `src/router.js` files.

## Redux
Use [Redux and Redux ToolKit](https://redux.js.org/) for some global state managment. Create your reducers/slicers under folder `src/reducers/` and add it to `src/store.js`

An usage example can be found in `src/reducers/exampleSlicer.js` and usage can be found in `src/pages/CardHomePage.jsx`.

Redux by default store states in memory. So use `localStorage`, `sessionStorage` for longer data storage in your app (contact Yaohong if you think it is neccessary to use localStorage and sessionStorage as Redux storing method).  

If you need to add middleware or change `store.js` for otehr reasons, ask Yaohong to modify the it.



## css, UI, icons
We use [tailwind css](https://tailwindcss.com/) as our css framework and [DaisyUI](https://daisyui.com/components/)  as UI framework.

Below are some icons libraries:
 - [Heroicons](https://heroicons.com/)
 - [Ali icon](https://www.iconfont.cn/)


 ## VSCode Plugins Recomendation
 Below are some vscode extension commonly used for React development:
  - Tailwind CSS IntelliSense  (for tailwind)
  - Simple React Snippets (for creating react code with snippets)
  - Prettier - Code formatter