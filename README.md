# thebookend

By [Anmol](https://github.com/6point022) and [Sandeep](https://github.com/itissandeep98)


## Backend
1. Install pipenv and flask
2. Get inside the directory and run `pipenv install`
3. Start the virtual environment shell by running `pipenv shell`
4. For starting the flask Server run [run.py](back-end/run.py)

## Frontend
1. Install `create-react-app`, `nodejs`, `yarn`
2. Get inside the directory and run `yarn` to install all the dependencies
3. Start the react app by running `yarn start`

#### Alternatively you can run the two scripts: [backend.sh](backend.sh) & [frontend.sh](frontend.sh)

## Creating a Redux Action
1. Create all the related action type in [ActionTypes.js](front-end/src/store/ActionTypes.js)
2. Create a new reducer in [reducers](front-end/src/store/reducers)
3. Import the newly created reducer in the [root reducer](front-end/src/store/reducers/rootReducer.js)
4. Create an Action creator in [ActionCreators.js](front-end/src/store/ActionCreators.js)
5. Use mapStatetoProps or mapDispatchtoProps functions for accessing the state or updating the state respectively using your action creator.
