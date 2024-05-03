import styled from 'styled-components'

export const BgContainer = styled.div`
padding: 100px;
font-famaly: "Open Sans";
`
export const FormsAndMeme = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
@media(max-width: 576px){
    display: flex;
    flex-direction: column;
    }
`
export const FormsContainer = styled.form`
margin-right: 50px;
width: 35%;
width: 4;
@media(max-width: 576px){
    width: 100%;
    order: 1;
    }
`
export const InputAndLabelDiv = styled.div`
display: flex;
flex-direction: column;
`

export const SubmitButton = styled.button`
background-color: #0b69ff;
color: #ffffff;
width: 100%;
margin-top: 20px;
padding: 10px;
border: 0px solid;
border-radius: 5px;
cursor:pointer;
outline: none;
`

export const SelectOptions = styled.select`
width: 100%;
padding: 8px;
background-color: #ffffff;
border: 2px solid #d7dfe9;
border-radius: 5px;
margin-top: 10px;
`
export const MemeHeading = styled.h1`
color: #35469c;
`
export const TextLabel = styled.label`
color: #7e858e;
margin-top: 20px;
`
export const TextInput = styled.input`
margin-top: 10px;
border-radius: 5px;
border: 2px solid #d7dfe9;
padding: 5px;
`
export const MemeVIewContainer = styled.div`
background-image: url(${props => props.bgImage});
background-size: cover;
height: 500px;
width: 60%;
color: #ffffff;
font-size: ${props => props.fontSize}px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
@media(max-width: 576px){
    width: 100%;
    height: 300px;
    order: 0;
    }
`
