const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST : return {
            ...state,
            loading: true
        }

        case FETCH_USERS_SUCCESS : return {
            loading: false,
            users: action.payload,
            error: ''
        }

        case FETCH_USERS_FAILURE : return {
            loading: false,
            users: [],
            error: action.payload
        }
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplacehlder.typicode.com/users')
        .then(response => {
            // response.data is the data of users
            const data = response.data
            dispatch(fetchUsersSuccess(data))
        })
        .catch(error => {
            // error.message is the error description
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchUsers())