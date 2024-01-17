import React from 'react';
import * as Styled from './style';
import {useAuth} from "@features/auth/authProvider";
import Logo from "@common/ui/icon/Logo";
import Typography from "@common/ui/typography";
import UserIcon from "@common/ui/icon/UserIcon";

const Navbar = () => {

    const {user} = useAuth();

    return (
        <Styled.Wrapper>
            <Logo className={"navbar__logo"}/>
            <Typography className={"header"} variant={"heading2"}>سامانه مقایسه و خرید آنلاین بیمه</Typography>
            <div>{user ? <div className={"navbar__user-info"}>
                <UserIcon className={"navbar__user-icon"}/>
                <div>{user.firstName} {user.lastName}</div>
            </div> : 'ثبت نام'}</div>
        </Styled.Wrapper>
    );
};

export default Navbar;