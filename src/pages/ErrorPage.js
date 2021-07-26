import React from 'react'
import '../sass/ErrorPage.scss';


const ErrorPage = () => {
    return (
        <div className = "error-page">
            <h1 className = "not-found-text display-1">Page is Not Found</h1>
            <h3 className = "error-text display-5">Error 404</h3>
        </div>
    )
}

export default ErrorPage;