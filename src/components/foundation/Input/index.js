import React from 'react';

import { Container, Input, Label, Error } from './styled';

const InputComponent = React.forwardRef(({ name, type, label, error, ...props }, ref) => {

  return (
    <Container>

      <Label htmlFor={name}>
        { label }
      </Label>

      <Input 
        id={name}
        type={type}
        name={name}
        ref={ref}
        {...props}
      />

      { error && (<Error>{ error.message }</Error>) }

    </Container>
  );
});

export default InputComponent;