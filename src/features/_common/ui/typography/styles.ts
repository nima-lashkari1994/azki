import styled from "styled-components";
import {Variant} from "@common/ui/typography/types";

type Props = {
    $variant:Variant,
    $bold:boolean
}
export const Typography = styled.div<Props>`
    font-weight: ${props => props.$bold ? 600 :props.theme.typography[props.$variant].fontWeight};
    font-size: ${props => props.theme.typography[props.$variant].fontSize};
`;