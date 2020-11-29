import React, { useState } from 'react';
import Input from '../foundation/Input';
import TextArea from '../foundation/TextArea';
import { Container, Button, Toast, Icon } from './styled';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../utils/validation';
import { FaMailBulk } from 'react-icons/fa';

const Form = () => {

  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);

  const [toast, setToast] = useState({
    color: '',
    text: ''
  })

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {

    setLoad(true);

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      setToast({
        color: 'green',
        text: 'Sua mensagem foi enviada com sucesso!'
      })
    } catch (error) {
      setToast({
        color: 'red',
        text: 'Ops, ocorreu um erro ao enviar sua mensagem.'
      })
    }

    setLoad(false);
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 5000)
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>

      <Toast className={open ? 'animation' : ''} color={toast.color}>

        <Icon color={toast.color}>
          <FaMailBulk />
        </Icon>

        <p>{toast.text}</p>

      </Toast>

      <Input 
        name='name'
        type='text'
        ref={register}
        label='Seu nome'
        error={errors.name}
      />

      <Input 
        name='email'
        type='email'
        ref={register}
        label='E-mail'
        error={errors.email}
      />

      <TextArea
        name='message'
        ref={register}
        label='Mensagem'
        error={errors.message}
      />

      <Button
        type='submit'
        disabled={load}
      >
        { load ? '...' : 'Enviar mensagem' }
      </Button>

    </Container>
  );
}

export default Form;