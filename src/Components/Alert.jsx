import React from 'react'

export default function Alert(props) {
    // const capitalize = (str) => {
    //     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    // }
    return (
        <>
            {props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.Type}</strong> {props.alert.msg} <h6>Go to Home page to see your Registration</h6>
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
        </>
    )
}
