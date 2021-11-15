import React from 'react';
import preloader from '../../../assets/images/preloader.gif';

let Preloader = (props) => {
    return <div style={{ height: '100px' }}>
        <img src={preloader} />
    </div>
}

export default Preloader;