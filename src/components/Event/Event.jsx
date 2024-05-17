import { useState } from 'react';
import { ModalRegister } from '../Modal/Modal';
import { Title, Container, View, Register, Description } from './Event.styled';
export default function Event ({event}) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return(
        <Container>
            <Title>{event.name}</Title>
            <Description>{event.description}</Description>
            <Register  onClick={() => {
          setIsOpenModal(true);
        }}>Register</Register>
            <View to="/:eventId">View</View>
            <ModalRegister
        isOpenModalRegistration={isOpenModal}
        setIsOpenModalRegistration={setIsOpenModal}
      />
        </Container>
    )
}