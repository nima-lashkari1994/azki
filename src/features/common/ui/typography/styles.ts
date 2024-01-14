import styled from "styled-components";
import {Variant} from "@common/ui/typography/types";

type Props = {
    $variant:Variant,
}
export const Typography = styled.div<Props>`
    font-weight: ${props => props.theme.typography[props.$variant].fontWeight};
    font-size: ${props => props.theme.typography[props.$variant].fontSize};
`;