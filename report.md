# Story Board

## Meta

### Who was on your team?
The team consisted of Oakley Reid (oakreid) and Samuel Siegmeister
(sss13gm31st3r)

### What's the URL of your deployed app?
http://storyboard.oakreid.info

### What's the URL of your GitHub repository?
https://github.com/oakreid/story_board

### Is your app deployed and working?
Yes

### For each team member, what work did that person do on the project?
Oakley Reid wrote the internal API, implemented the calls to the
external API, set up the database objects/migrations, implemented
Phoenix Channels and the chat client (front and back end), deployed
the application to http://storyboard.oakreid.info, and wrote the
report. Samuel Siegmeister wrote the front end using react and
redux for state management, and material-ui for the styling.
Samuel also designed the application in terms of UI as well as the
requirements for the internal API.

## App

### What does your project 2 app do?
Our app allows users to keyword search for news stories and
efficiently browse results in the clean tiling UI we designed to
concisely represent the details about a news story that we
expected a user to want to know before clicking on the link to the
full article. Users of the site that create an account are also
able to "favorite" articles they like or would otherwise like to
be able to quickly access for any reason. These articles will
appear in the "favorites" section of a logged in user's webapp
and are presented in the same easy-to-read manner that they were
on the search page. Furthermore, logged in users are granted
access to a global chat client, where they can share discussions
about current events, trending articles, etc.

### How do users interact with your application? What can they accomplish by doing so?
In our app, the central functionality derives from the navigation
bar shown on the top of the screen at all times. On the home page
(which is also the landing page), a user can use the search bar in
the nav bar to search for news articles across the web. Assuming
their query is legitimate, a number of tiles containing details
about news articles that match the query will appear on the home
page. If an article piques a user's interest they can click on the
link icon in on the tile of that article to view the entire thing
on the site it originated from. From there, a user can login or
register an account on the site to unlock further functionality.
This can be accomplished by using the "Login" or "Register" buttons
on the right side of the site's nav bar. Both of these will open
dialogues requesting the user to enter a username and password to
log in. Once they have done this, the option to "favorite" news
articles is becomes available by clicking the heart icon on the
tile of a news article. "Favorited" news articles can then be
accessed by clicking the "hamburger" (three vertical lines) and then
"Favorites" in the dropdown that appears. While on the Favorites
page, which displays articles in the same tile view as on the home
page, a user can use the search bar to search through their  
favorited articles.
