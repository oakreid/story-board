# Story Board

## Meta

### Who was on your team?
The team consisted of Oakley Reid (oakreid) and Samuel Siegmeister
(sss13gm31st3r)

### What's the URL of your deployed app?
https://storyboard.oakreid.info

### What's the URL of your GitHub repository?
https://github.com/oakreid/story_board

### Is your app deployed and working?
Yes

### For each team member, what work did that person do on the project?
Oakley Reid wrote the internal API, implemented the calls to the
external API, set up the database objects/migrations, implemented
Phoenix Channels and the chat client (front and back end), deployed
the application to https://storyboard.oakreid.info, and wrote this
report. Samuel Siegmeister wrote the front end using react and
redux for state management, and material-ui for the styling.
Samuel also designed the application in terms of UI as well as the
requirements for the internal API.

## App

### What does your project 2 app do?
Our app is an SPA (Single Page Application) that allows users to
keyword search for news stories and
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
about current events, trending articles, etc. Last but not least 
users can share articles they find on our site to social media 
platforms of their choice.

### How do users interact with your application? What can they accomplish by doing so?
In our app, the central functionality derives from the navigation
bar shown on the top of the screen at all times. On the home page
(which is also the landing page), a user can use the search bar in
the nav bar to search for news articles across the web. Assuming
their query is legitimate, a number of tiles containing details
about news articles that match the query will appear on the home
page. If an article piques a user's interest they can click on the
the tile of that article to view the entire thing
on the site it originated from, or click on the share button of 
the article tile to share it on the social media platform of their 
choice. From there, a user can login or
register an account on the site to unlock further functionality.
This can be accomplished by using the "Login" or "Register" buttons
on the right side of the site's nav bar. Both of these will open
dialogues requesting the user to enter a username and password to
log in. Once they have done this, the option to "favorite" news
articles is becomes available by clicking the heart icon on the
tile of a news article. "Favorited" news articles can then be
accessed by clicking the use "silhouette" icon in the top right and
"Favorites" in the dropdown that appears. While on the Favorites
page, which displays articles in the same tile view as on the home
page, a user can use the search bar to quickly make another search
query back on the home page. Back on the Favorites page, Users
can click the heart icon on any of their favorites to
"unfavorite" that article, removing it from their favorites page.
Finally, by clicking the user icon and then "Chat" in the
dropdown that appears, the user can access a global chat log
where they can freely discuss anything they'd like. This
funcitonality was inspired by the notion of "Discord" servers,
which are created with a specific topic in mind that members of the
server tend to discuss. In essence, this webapp has its own,
built-in Discord server.

### For each project requirement above, how does your app meet that requirement?
##### In general, this application should be significantly more ambitious...  
See the next section for details on that!

##### The server side logic of your app must be build using Elixir/Phoenix
Check.

##### Your application must have significant server-side/back-end logic
Our app contains logic for numerous internal API routes for
communicating with and transferring data to the client, as well as
calls to the external API we chose to use in this project. It also
contains logic that handles requests to the database requiring
specifically formatted replies and logic that handles submissions to
the chat plus broadcasting received information via Phoenix channels.

##### All of your app must be deployed to the VPS(es) of one or more members...
Our app is deployed on Oakley's VPS.

##### If you can self-host things on your VPS, you should...
The app is entirely self-hosted, including the proxy server, all of
the app's source code, and the Postgres database that the app uses.

##### Your app should have user accounts and support local password authentication...
Check. We use the Argon2 Elixir library for secure password auth.

##### Users should be stored in a Postgres database, along with...
Check. Users and the articles they have favorited are stored in our
app's Postgres database.

##### Your application should use an external API that requires authentication...
Check. Our app uses the newsapi API (https://newsapi.org/).

##### Any API access should be server <-> server...
Check.

##### Your application should use Phoenix Channels to push realtime updates...
Check. Our app's chat service delivers live updates to users using
Phoenix Channels.

##### You should work with a team of 2-4 people...
Check.

### What interesting stuff does your app include beyond the project requirements?
By far the most interesting thing we would say about our app compared
to the other projects we have done this semester is the UI design.
We wanted to sharpen the UX for this project to a razor's edge, and
to do so we implemented the "material-ui" package, a front end
framework that the two of us had heard of before starting the
project, but never explored in-depth. After delving into that, we
were able to polish the site to a mirror sheen, ensuring that our
site was easy to use and simple to navigate. A decision was made
early on to use the navigation bar as the axis around which the rest
of our functionality would revolve, and so implementing the Header
component of the took perhaps the most time out of any aspect of
the UI. We also pride ourselves on the pleasant-to-look-at and
concise design of the tiles that are created when a user enters a
search query. Making the application mobile-friendly was also an end
goal of ours set early, and we believe that through our various
design decisions we accomplished what we set out to achieve in that
sense as well. The fact that our application is an SPA contributes
to this dedication to user-friendliness, as we wanted the app to
run as fast as possible, and that was the best way we could think
to make that happen.

### What's the complex part of your app? How did you design that component and why?
The most complex part of the app has to be the chat service that we
implemented. The fact that our application is an SPA made developing
it especially difficult, as we were now not only using a database
and a redux state to store data, but now also a Backup Agent for the
data trasmitted in the Phoenix Channel. The chat itself required data
from all three of these sources and suffice to say it was easy
to get things mixed up. In order to send something to the chat, the
application first had to pull the current user's ID from the stored
redux state, then send that information to along with the (sanitized)
message to the chat to the chat Channel. From there, the previous
state of the chat would be pulled from the Backup Agent, and in order
to prepend the submitter's input to the existing chat, the username
of that user would have to be pulled from our Postgres database
based on the user id that had been submitted with the request. All
that just to make the username of the submitter appear above the
message they posted in the chat so that everyone else looking at the
chat would know who posted the message. Ultimately though it was
worth the effort, as having a global chat was an idea that we really
were excited to implement after one of us joked about creating a
Story Board "Discord" server. Overall we're happy with how it turned
out.

### What was the most significant challenge you encountered and how did you solve it?
The most significant challenge we came across was attempting to fix
a bug in which our Ajax calls to the internal server weren't working
within any of our redux reducers. After quite a lot of debugging, we
eventually discovered that asynchronous function calls do not always
work properly inside of redux reducers, and to solve this problem we
would have to implement middleware in the form of 'redux-thunk' to
get them to function correctly. Yet another unfortunate side of
effect of choosing to make our webapp an SPA, but we managed to work
through it.
