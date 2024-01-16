import React from 'react';
import * as Styled from './style';
import {useAuth} from "@features/auth/authProvider";
import Logo from "@common/ui/icon/Logo";
import Typography from "@common/ui/typography";
import UserIcon from "@common/ui/icon/UserIcon";

const Navbar = () => {

    const {user} = useAuth();

    return (
        <Styled.Navbar>
            <Logo className={"navbar__logo"}/>
            <Typography className={"header"} variant={"heading2"}>سامانه مقایسه و خرید آنلاین بیمه</Typography>
            <div>{user ? <div className={"user-info"}>
                <UserIcon className={"user-icon"}/>
                <div>{user.firstName} {user.lastName}</div>
            </div> : 'ثبت نام'}</div>
        </Styled.Navbar>
    );
};

export default Navbar;