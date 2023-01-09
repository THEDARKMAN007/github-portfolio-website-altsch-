## Github-portfolio-website
A React app showing github repostories
[click here](https://github-portfolio-4cd77.web.app/) to view this repo's website

## major project update and feature reimplementation

# made it flexible for any github user
I added a login page. what it does majorly is collect the github username filled into the form and then pass it to the homepage before fetching the API data. this way anyone can use the website simply by inputting their github username in the login form.
you will see this implemented in homepage.js, line 15

# recreated design layouts using tailwindcss
- i changed the design layout/features
- i used tailwind to implement design
- i made the design mobile responsive

# Optimized API fetch 
- i fetched api once and used state attribute in the link element to pass fetched data from one route to the other instead of fetching api individually for each route.

# rebuilt pagination function
- I added a new features to the pagination buttons. the number of buttons on the page, and the number of repository displayed per page can be controlled simply by changing the value of the variables in github_repo.js file, you will find on line 15 & 16 respectively the below.
  let repoPerPage = 3;
  let MostNoOfPagButtons = 3;
