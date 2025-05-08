import { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Headroom from 'react-headroom';

const Root = () => {
    return (
        <Fragment>
            <Headroom>
                <Navbar />
            </Headroom>
        </Fragment>
    );
};

export default Root;