import React from 'react';
import Typography from "@common/ui/typography";
import IconButton from "@common/ui/iconButton";
import InsuranceIcon from "@common/ui/icon/InsuranceIcon";
import {PageLayout} from "@common/ui/layout";
import * as Styled from './styles';

const InsuranceType = () => {

    return (
        <Styled.Wrapper as={PageLayout} title={"انتخاب بیمه"}>
            <IconButton
                icon={<InsuranceIcon/>}
                text={
                    <Typography variant={"bodySmall"} bold>
                        شخص ثالث
                    </Typography>
                }
                onClick={() => {
                }}
            />
            <IconButton
                disabled
                icon={<InsuranceIcon/>}
                text={
                    <Typography variant={"bodySmall"} bold>
                        بدنه
                    </Typography>
                }
                onClick={() => {
                }}
            />
        </Styled.Wrapper>
    );
};

export default InsuranceType;