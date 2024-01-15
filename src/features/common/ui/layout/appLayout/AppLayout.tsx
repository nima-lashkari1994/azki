import React from 'react';
import Navbar from "./navbar";
import {Outlet} from "react-router-dom";
import * as Styled from './styles';

const AppLayout = () => {
    return (
        <Styled.Layout>
            <Navbar/>
            <section className={"layout__content"}>
                <Outlet/>
            </section>
        </Styled.Layout>
    );
};

export default AppLayout;