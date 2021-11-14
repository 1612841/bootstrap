import React from 'react';
import './container.scss';

function container() {
    return (
    <div className="container bg-green">
        <div className='row border'>
            <div className="col-xl bg-color-primary">
                Duy Quôc
            </div>
            <div className="col-xl d-flex order-last bg-color-secondary">
                <button className='btn color-green'>nhấn vào đây</button>
            </div>
        </div>
        <div className="row">
            <nav className="navbar bg-primary">

            </nav>
        </div>
    </div>
    )
}

export default container;
