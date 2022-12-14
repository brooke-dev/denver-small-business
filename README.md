# Busy Bee: Phase 5 Capstone Project

## Description

Welcome to the Busy Bee! A community built for the person who loves to shop sustainably, and locally. Small businesses struggle by the day to promote themselves on all of the various social media platforms! This application is meant to reduce the needs of both the business and the consumer. A consumer is able to search through the list of small businesses, so that they can review, and favorite their local business. This application uses seeded data from real small businesses in the Denver/Boulder area. They are loved by many!

## Requirements

- Ruby 2.7.4
- Rails v7
- React v18
- NodeJS (v16), and npm
- Render account
- Postgresql
- AWS Account 

## Setup

Start by forking and cloning this project repository to your local repository. Run the below commands:

```console
$ cd your-project-name
$ bundle install
$ rspec
$ npm install --prefix client
$ rails db:create
$ rails db:migrate db:seed
```

To run the server:
```console
$ rails s
```

In a different terminal run the following commands to run the React front end:
```console
$ npm start --prefix client
```

To view your application in the browers make sure you are on your http://localhost:4000 after running the above commands.

## Application Coding Details

This application utilizes elements of React (JavaScript, CSS, HTML, JSX) and Ruby on Rails to create a cohesive front and back end experience. An individual users data persists to a backend database so that any changes that user has made will persist as the page is updated. When uploading pictures to the user profile avatar, AWS is used as a new tech API to store those images. 

### Phase 5 Requirements Met Through this Project
This project:

- Uses a Rails API backend with a React frontend.
- Has at least three models on the backend, that include the following:
  - At least two one-to-many relationships.
  - At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Has a joins table. This joins table has a user submittable attribute.
- Has full CRUD actions for at least one resource.
- Has a minimum of create and read actions for EACH resource.
- Has at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
- Implements authentication/authorization, including password protection. A user must be able to:
  -sign up with a new user account,
  -log in to the site with a secure password and stay logged in via user ID in the session hash, and
log out of the site.

## About the Creators 
 Brooke Ross has completed her 15 week, extremely rigorous online program. With Flatirons school, she has attended classes online Monday through Friday from 9am-5pm since August 29th 2022. She will graduate December 9th, with a certificate in full stack Software Engineering and over 500 hours of documented credit hours. Through this program and its many challenges she has been learning to code with Ruby on Rails (backend), and React and JavaScript (frontend). With this program, she is able to showcase her hard work and passion!
 
- Connect with Brooke [here](https://www.linkedin.com/in/brooke-ross-se/)

## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install Postgresql

Render requires that you use PostgreSQL for your database instead of SQLite.
PostgreSQL (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```
## Create a AWS account and Read Up on Active Storage!
Some great resources: 
- [Using Active Storage](https://medium.com/nerd-for-tech/handling-images-part-1-using-active-storage-in-rails-6-with-amazon-s3-buckets-92b739fa790)
- [Ruby on Rails #21 Active Storage With Amazon S3 Cloud Storage](https://www.youtube.com/watch?v=OWBWXOcx1rU)

## Thank you!
A special thank you to Flatirons School(my cohort and instructors) and my family, friends, and fiance (Dan) for the immense support these past 15 weeks! 
## Resources

- [Getting Started with Ruby on Rails on Render](https://render.com/docs/deploy-rails)
- [Render Databases Guide](https://render.com/docs/databases)
