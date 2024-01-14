import React from 'react';
import Navbar from "@common/ui/layout/navbar";
import {Outlet} from "react-router-dom";
import * as Styled from './styles';

const Layout = () => {
    return (
        <Styled.Layout>
            <Navbar/>
            <section className={"layout__content"}>
                <Outlet/>
            </section>
        </Styled.Layout>
    );
};

export default Layout;