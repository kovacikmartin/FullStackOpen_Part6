const initialState = null

export const showNotification = (notification, time) => {

    return async dispatch => {

        dispatch({
            
            type: 'SHOW',
            notification: notification
        })

        setTimeout(() => dispatch(hideNotification()), time)
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