import React, {
  ComponentType,
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import Container from './styles';

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
}

const Input: FC<InputPros> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon />}
      <input ref={inputRef} {...rest} defaultValue={defaultValue} />
    </Container>
  );
};

export default Input;
