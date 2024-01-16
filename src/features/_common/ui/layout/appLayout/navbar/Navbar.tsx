import React from 'react';
import * as Styled from './style';
import {useAuth} from "@features/auth/authProvider";
import Logo from "@common/ui/icon/Logo";
import Typography from "@common/ui/typography";

const Navbar = () => {

    const {user} = useAuth();

    return (
        <Styled.Navbar>
            <Logo className={"navbar__logo"}/>
            <Typography variant={"heading2"}>سامانه مقایسه و خرید آنلاین بیمه</Typography>
            <div>{user ? user.firstName : 'ثبت نام'}</div>
        </Styled.Navbar>
    );
};

export default Navbar;