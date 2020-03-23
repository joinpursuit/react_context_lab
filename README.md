# Context Assignment 

For this assignment you will be making a small widgets app. 

Your app should include the following pages:

### Home Page
This should welcome the user to your widgets App.

### A Weather Page 
This page gives the five day forecast of the coming weeks hi's and lo's. You can use the `navigator.geolocaton` API to get the current users location, as well as the [open weather API](https://openweathermap.org/current) (or a different weather API of your choosing) to get the weather.  

### A clock 
This page will include the current date as well as the current time. Style this page to be attractive and clear. 

## The What's New? 
You may have read the previous project and thought to yourself, 'this is good practice, but nothing here is super new'. Fear not! 
Your app should also include a NavBar that gives the user the option to not only travel from page to page but to also toggle between a light and dark mode. You are required to use React Context API in order to keep track and pass the theme around. Your app should be fully styled depending on the theme. 

**Helpful Tip:** Give the components wrapper element the className of the theme as a variable. You can style elements by nesting your css like so: 

```html 
    <div className="dark">
        <h1 className="welcome"> 
            Welcome 
        </h1>
    </div>
```

```css
    .dark .welcome {
        color: white; 
        background: black; 
    }
```

After you've got the theme styling working go ahead and add the ability for your app to remember what theme the user last used. 

**Hint:** You'll want to look into using localStorage. 

## Bonus Section 
Allow the user to select from additional themes. Maybe you have a neon theme, a creepy theme, an 80's theme.  

