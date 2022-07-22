import React from 'react'

export default function card() {
    return (
        <>
            <h1 className="my-5 text-center">Reviews Card</h1>
            <div className="card-deck row">

                <div className="card text-white bg-dark mb-3 col-sm-4 mx-4" style={{ maxWidth: 18 + 'rem' }}>
                    <div className="card-header text-center">Kavy</div>
                    <div className="card-body">
                        <h5 className="card-title">Web Devloper</h5>
                        <p className="card-text text-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo nemo officiis dolores voluptatibus animi quaerat hic possimus commodi fugit optio recusandae natus, iusto eveniet magnam obcaecati, porro molestias eligendi.</p>
                    </div>
                </div>
                <div className="card text-white bg-dark mb-3 col-sm-4 mx-4" style={{ maxWidth: 18 + 'rem' }}>
                    <div className="card-header text-center">Khushi</div>
                    <div className="card-body">
                        <h5 className="card-title">App Devloper</h5>
                        <p className="card-text text-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, repellendus. Adipisci error in corrupti eligendi. Earum illum laboriosam, accusamus sequi quibusdam atque? Optio quos cupiditate dignissimos iusto iure molestias nobis quas velit!</p>
                    </div>
                </div>
                <div className="card text-white bg-dark mb-3 col-sm-4 mx-4" style={{ maxWidth: 18 + 'rem' }}>
                    <div className="card-header text-center">Pratik</div>
                    <div className="card-body">
                        <h5 className="card-title">Cricketer</h5>
                        <p className="card-text text-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis a quam qui, id doloremque quia nesciunt commodi non quos tempora soluta atque magni praesentium ut nulla. Cumque, incidunt.</p>
                    </div>
                </div>
            </div>
        </>

    )
}
