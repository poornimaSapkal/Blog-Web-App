# Blog Web App

This is a blog web app implemented with CRUD functionality and RESTful routing.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.


### Installing

1. Install VS Code
2. Install NodeJS 
3. Install MongoDB


You can refer to the package.json file and install all the dependencies mentioned therein once you've got the environment setup. 

npm install package-name

```
1. body-parser
2. ejs
3. express
4. express-sanitizer
5. method-override
6. mongoose
7. nodemon (not required but recommended)

//nodemon eliminates the need to restart the server every time a change is made.
```

## Functionality 

The index page displays all the blog posts that are in the database. 


![ScreenShot](https://github.com/poornimaSapkal/Blog-Web-App/blob/master/images/index.png)



The New Post button allows the user to create a new blog post. It directs the user to a form where the user fills in information of the blogpost and is then redirected to the index page. 


![ScreenShot](https://github.com/poornimaSapkal/Blog-Web-App/blob/master/images/new.png)



On clicking a blog post title, the user is directed to a show page which gives the user more information about that specific blogpost.


![ScreenShot](https://github.com/poornimaSapkal/Blog-Web-App/blob/master/images/show.png)



The Update button directs the user to another form where the user can update certain details about the blogpost. Since express-sanitize is implemented in the code, any input enclosed in script tags is ignored and not stored in the database. This ensures that the users don't enter malicious javascript code.


![ScreenShot](https://github.com/poornimaSapkal/Blog-Web-App/blob/master/images/update.png)

## RESTful Information

![ScreenShot](https://github.com/poornimaSapkal/Blog-Web-App/blob/master/images/rest.png)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
