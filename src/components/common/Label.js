import styled from "styled-components";
import {
  compose,
  space,
  color,
  layout,
  border,
  flexbox,
  position,
  variant,
  typography,
} from "styled-system";

const Label = styled.p(
  compose(
    space,
    color,
    layout,
    border,
    flexbox,
    position,
    typography,
    variant({
      variants: {
        Title: {
          fontSize: "1rem",
          fontWeight: "bold",
          fontFamily: `'Lato', sans-serif`,
          display: "inline-block",
        },
        Body: {
          fontSize: "0.9rem",
          color: "gray",
          fontFamily: `'Lato', sans-serif`,
          display: "inline-block",
        },
      },
    })
  )
);

export default Label;
