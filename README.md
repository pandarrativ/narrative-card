# REACT_STRUCTURE_TEMPLATE


## Project Setup
### Frontend 
Use Node20 (node=v20.11.1, npm=10.2.3) for frontend. To manage and change Node version, you may use [nvm](https://github.com/nvm-sh/nvm)
```shell
cd <Your_project_folder>/frontend
npm install
```

Add environment variables. Create a .env file under `/frontend` folder and add following code.
```
REACT_APP_BACKEND_HOST = "http://localhost:8000"
```

To start the project
```shell
npm start
```

### Backend
You might need mongoDB installed and running on your local machine.

For the first time, use annoconda to create a python env with python=3.9
(The following operations is done under folder `/backend` instead of `/backend/backend`)
```shell
cd <Your_project_folder>/backend
conda create --name na_card python=3.9
conda activate na_card
pip install -r requirements.txt
python manage.py makemigrations
```
Add environment variables. Create a .env file under `/backend` folder and add following code.
```
OPENAI_API_KEY="..."
OPENAI_API_VERSION="."
OPENAI_API_ENDPOINT="."
```

To run backend server
```shell
python manage.py runserver
```


# Frontend Development Guidlines

## Naming Conversation
For each components/pages, files should start with our subsystem name: "Card". For example, `HomePage.jsx` for Card system should be named as  `CardHomePage.jsx`. 

If you think your component can be used for other teams, then don't include "Card" and we will share it with other team memebers.


## Project Folder Structures
`src/assets`: put your static files such as images, videos, icons under this folder.
`src/components`: put your components under this foler.
`src/pages`: put your files of a whole page/view/controler under this folder and add it to `src/router.js` for page navigation.
`src/config`: put for configuration files (such as backend endpoints).
`src/slicers`: put your Redux slicers/reducers in under this folder and add it to `src/store.js`.

For css files, it is recommended to use tailwind css. For some css styles that is more convivent to write with css file, create a folder for that page or component, and put you .jsx file and .css file under this project. (An example is `src/pages/CardHomePage`). 


## Routers
Use [React-Router](https://reactrouter.com/en/main) for page navigation.

Write your pages into Routers of `src/router.js` files.

## Redux
Use [Redux and Redux ToolKit](https://redux.js.org/) for some global state managment. An usage example can be found on [at](https://redux.js.org/tutorials/quick-start).


A `cardCreationReducer` is already created for this project.


## css, UI, icons libraries
We use [tailwind css](https://tailwindcss.com/) as our css framework and [DaisyUI](https://daisyui.com/components/)  as UI framework.

Below are some icons libraries:
 - [Heroicons](https://heroicons.com/): use like directly in your code
 - [Ali icon](https://www.iconfont.cn/): download and add to `/frontend/src/assets/icons` then use in your code


 ## VSCode Plugins Recomendation
 Below are some vscode extension commonly used for React development:
  - Tailwind CSS IntelliSense  (for tailwind)
  - Simple React Snippets (for creating react code with snippets)
  - Prettier - Code formatter




# Brontend Development Guidlines

All the development codes for this project should be written in `/backend/card`.
## Project Folder Structures
`/backend/card/ai_models`: Do not modify files here. It lists two the methods to make API requests to AI_Models: send_prompt(), send_messages()
`/backend/card/utils`: some utility functions such as setting up mongodb, prompts, parsing methods.
`/backend/card/views.py`: write REST api for each views/controllers codes here. Create a class for each view and add it into `url`.
``
`/backend/card/urls.py`: Add url to your views. For example, create a `ConversationApiView` class in `views.py` and add it to this file with url prefix `/conversation`. Now you can access this endpoint in frontend with "http://localhost:8000/card/conversation"


For your development, create an ApiView class in `views.py` and attach a url to it in `url.py`.
For each views.py, write your methods for REST api, data storage, making request to openai and receive it and send back to users in RESTful. An example can be found in `view.py`