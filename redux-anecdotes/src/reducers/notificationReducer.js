const initialState = null
let timeout = null

export const showNotification = (notification, time) => {

    if(timeout !== null){

        clearTimeout(timeout)
    }
    
    return async dispatch => {

        dispatch({

            type: 'SHOW',
            notification: notification
        })

       timeout = setTimeout(() => dispatch(hideNotification()), time)
    }
}

export const hideNotification = () => {

    return{

        type: 'HIDE'
    }
}

const notificationReducer = (state = initialState, action) => {

    switch(action.type) {

        case('SHOW'): {

            return action.notification
        }

        case('HIDE'): {

            return initialState
        }

        default:
            return state
    }   
}

export default notificationReducer