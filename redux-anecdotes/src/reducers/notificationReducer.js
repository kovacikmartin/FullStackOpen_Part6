const initialState = null

export const showNotification = (notification) => {

    return{

        type: 'SHOW',
        notification: notification
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