import React from 'react';
import { useRouteError } from 'react-router-dom';
import "./ErrorPage.css"

const ErrorPage = () => {

    const error = useRouteError()

    return (
        <>
            <div className='error-style'>
                <h1>Ops!An Error Occured!</h1>
                <br />
                {error && (
                    <div>
                        <p className='text-style'>{error.statusText || error.message}</p>
                        <p>{error.status}</p>
                    </div>
                )}
            </div>

        </>

    )
}

export default ErrorPage;