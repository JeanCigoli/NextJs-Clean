import React from "react";

import { Container, TextArea, Label, Error } from "./styled";

const TextAreaComponent = React.forwardRef(
  ({ name, label, error, ...props }, ref) => {
    return (
      <Container>
        <Label htmlFor={name}>{label}</Label>

        <TextArea id={name} name={name} ref={ref} {...props} />

        {error && <Error>{error.message}</Error>}
      </Container>
    );
  }
);

export default TextAreaComponent;
