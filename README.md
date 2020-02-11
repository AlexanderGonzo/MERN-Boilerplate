# MERN-Boilerplate
boilerplate used to build apps with the MERN stack architecture.   
## Installation  
Use the npm package manager to install dependencies.
```bash
git clone https://github.com/AlexanderGonzo/MERN-Boilerplate.git
cd MERN-Boilerplate
npm i  #install backend dependencies
cd client #cd into frontend 
npm i   #install frontend dependencies
cd .. #return to root directory
```    
## Add configs  
In order to configure this boilerplate you must add two `.json` config files in the `config` directory, save them as `default.json` and `production.json`  
The config files should contain the following:  
```bash
{
  "mongoURI": "yourmongodburi",
  "jwtSecret": "mysecrettoken"
}
```  
## Usage  
In the root directory run this command:  
```bash
npm run dev
```
## Heroku Deployment

In the project root directory, run this command:

```bash
heroku create #Create your app on Heroku
git push heroku master #Deploy your app to Heroku

```    
## Make this repo your own!
1st you need to create a new remote repository. 
2nd use the following:
```bash
git clone https://github.com/AlexanderGonzo/MERN-Boilerplate.git other-name
cd other-name
git remote set-url origin NEW_URL
```

