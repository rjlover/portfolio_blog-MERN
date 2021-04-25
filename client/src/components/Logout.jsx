import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import { userContext } from '../App'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Logout() {

    const history = useHistory();

    const { state, dispatch } = useContext(userContext);

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {

            if (res.status !== 200) {
                throw new Error(res.error);
            } else {
                dispatch({ type: "USER", payload: false });

                history.push('/Signin', { replace: true });
                return res.json()
            }

        }).then((data) => {
            toast.info(data.info, { position: toast.POSITION.BOTTOM_CENTER });

        }).catch((err) => {
            console.log(err);
        });
    })

    return (
        <>
            <h1>from logout page</h1>
        </>
    )
}

export default Logout;
