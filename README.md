By [Anmol](https://github.com/6point022) and [Sandeep](https://github.com/itissandeep98)

# Table of content

- [Table of content](#table-of-content)
	- [Usage](#usage)
		- [Features](#features)
	- [Setup](#setup)
		- [Backend](#backend)
		- [Frontend](#frontend)
			- [Creating a Redux Action](#creating-a-redux-action)

## Usage

1. The frontend of this webapp is hosted on Github Pages and the backend on heroku
2. Visit [itissandeep98.github.io/Bookend/](itissandeep98.github.io/Bookend/)

### Features

1. Login or Register into portal
2. Create new Ad for lending or selling your books
3. Search database for books
4. View your history of books

## Setup

### Backend

1. Install `pipenv` and `flask`
2. Get inside the directory and run `pipenv install`
3. Start the virtual environment shell by running `pipenv shell`
4. For starting the flask Server run [run.py](run.py)

### Frontend

1. Install `create-react-app`, `nodejs`, `yarn`
2. Get inside the directory and run `yarn` to install all the dependencies
3. Start the react app by running `yarn start`

#### Creating a Redux Action

1. Create all the related action type in [ActionTypes.js](src/store/ActionTypes.js)
2. Create a new reducer in [reducers](src/store/reducers)
3. Import the newly created reducer in the [root reducer](src/store/reducers/rootReducer.js)
4. Create an Action creator in [ActionCreators.js](src/store/ActionCreators.js)
5. Use mapStatetoProps or mapDispatchtoProps functions for accessing the state or updating the state respectively using your action creator.
