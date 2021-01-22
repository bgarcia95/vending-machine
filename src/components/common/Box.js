import styled from "styled-components";
import {
  compose,
  shadow,
  space,
  color,
  layout,
  border,
  flexbox,
  position,
  background,
} from "styled-system";

const Box = styled.div(
  compose(shadow, space, color, layout, border, flexbox, position, background)
);

export default Box;
