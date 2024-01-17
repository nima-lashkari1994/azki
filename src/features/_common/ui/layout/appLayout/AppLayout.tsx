import React from 'react';
import Navbar from "./navbar";
import {Outlet} from "react-router-dom";
import * as Styled from './styles';

const AppLayout = () => {
    return (
        <Styled.Wrapper>
            <Navbar/>
            <section className={"app-layout__content"}>
                <Outlet/>
            </section>
        </Styled.Wrapper>
    );
};

export default AppLayout;