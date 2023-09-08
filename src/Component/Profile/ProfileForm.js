import { useRef, useContext } from 'react'
import './ProfileForm.css'
import AuthContext from '../../Store/Auth-context';
import { useHistory } from 'react-router-dom';


const ProfileForm = () => {
    const newPasswordInputRef = useRef();
    const authCtx = useContext(AuthContext)
    let history = useHistory()
    const submitHandler = (event) => {
        event.preventDefault()

        const enteredNewPassword = newPasswordInputRef.current.value;

        //add validation
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDHlk3s7ThaSrGiF9h8286Xuua4SjOVTsQ', {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
                password: enteredNewPassword,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json',

            }
        }).then(res => {
            //assumption : Always Succeeds!
            history.replace('/')

        })
    }

    return (
        <form onSubmit={submitHandler} className='form'>
            <div>
                <label className='label' htmlFor="'new-password">New Password</label>
                <input className='input[type="password"]' type='password' id='new-password' minLength='7' ref={newPasswordInputRef}></input>
            </div>
            <div>
                <button className='button'>Change Password</button>
            </div>
        </form>
    )
}
export default ProfileForm