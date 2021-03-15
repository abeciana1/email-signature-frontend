import { combineReducers } from 'redux'

import user from './user-reducer'
import emailSignature from './email-signature-reducer'

export default combineReducers({
    user,
    emailSignature
})