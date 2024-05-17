import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 200px;
border: 1px solid green;
border-radius: 12px;
padding:10px;
`

export const Title = styled.h2`
font-size: 24px;

`

export const Description = styled.p`
font-size: 12px;
`

export const View = styled(Link)`
font-size: 12px;
`
export const Register = styled.button`
font-size: 12px;
`