import React, { FC } from 'react';
import Container from './styles';
import { ToastMessages } from '../../hooks/Toast';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessages[];
}

const ToastContainer: FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
