import React from 'react'

const Copyright =  () => {
    const date = new Date();
    return(
        <div className="copyright">
            ©{date.getFullYear()}
        </div>
    )
}

export default Copyright;