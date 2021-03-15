import { LAYOUT, TAB } from '../actions/email-signature-actions'

const initialState = {
    tab: "",
    layout: ""
}

const emailSignatureReducer = (state = initialState, action) => {

    switch (action.type) {
        case LAYOUT:
            return {
                ...state,
                layout: action.payload
            }
        case TAB:
            return {
                ...state,
                tab: action.payload
            }
        default: return state
    }
}

export default emailSignatureReducer