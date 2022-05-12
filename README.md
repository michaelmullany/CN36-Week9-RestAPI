## CN36-Week9-RestAPI

### MOVIE ENDPOINT

#### POST:

- Add a movie
- Request: { "title": "*new movie title*", "actors": ["*actor name 1*","*actor name 2*","*actor name 3*"] }

#### GET

- Return all movies
- No request required

#### PUT

- Update a movie (Find a film by title in filter, update the actors in update)
- Request: { "filter": { "title": "*movie to update*" }, "update": { "actors": ["*actor name 1*","*actor name 2*","*actor name 3*"] } }

#### DELETE

- Delete a movie by title
- Request: { "title": "*movie to delete*" }

### LOGIN ENDPOINT

#### GET

- Log in with username and password
- Request {	"username": "*user to log in as*", "password": "*user's password*" }
- Password is checked against the database

### USER ENDPOINT

#### POST

- Add a new user
- Request: { "username": "*new username*", "email": "*new user's email*", "password": "*new password*" }
- Email is checked for validity

#### GET

- Get a list of all users
- No request required

#### PUT

- Update a user's email address (Find a user by username in filter, update the email in update)
- { "filter": { "username": "*existing username*" }, "update": { "email": "*new email*" } }

#### DELETE

- Delete a user by username
- {	"username": "*existing username*" }