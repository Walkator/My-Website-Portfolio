import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    margin: auto;
    width: 70%;
    top: 250px;
    height: 400px;
`;

const Tittle = styled.h1`
    position: relative;
    width: -500px;
    height: 0%;
    left: 0px;
    top: -100px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #222831;
`;

const WrapperInputText = styled.div`
    width: 65%;
    margin: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media (min-width: 1300px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const InputText = styled.input`
    /*width: 20%;*/
    padding: 15px 20px;
    margin: 8px;
    color: #222831;
    
    border: none;
    border-radius: 8px;
    border: 1px solid #00ADB5;

    cursor: pointer;
`;

const TextArea = styled.textarea`
    width: 90%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 1px solid #00ADB5;
    border-radius: 8px;
    background-color: #FFFFFF;
    font-size: 14px;
    resize: none;
`;

const TitleLabel = styled.h1`
    position: relative;
    height: auto;
    left: auto;
    top: auto;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 56px;

    color: #222831;
`;

const Button = styled.button`
    position: relative;

    color: #ffffff;
    border: 2px solid #00ADB5;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;

    max-width: 160px;
    min-width: 120px;

    max-height: 50px;
    min-height: 50px;

    background-color: white;

    &:hover {
        cursor: pointer;
        border: 2px solid #00d9e3;
    }
`;

const ButtonText = styled.h1`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #00ADB5;
    &:hover {
        cursor: pointer;
        color: #00d9e3;
    }
`;


class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
          [name]: value    
        });
      }

      handleSubmit(event) {
        alert("Name: " + this.state.name + " Email: " + this.state.email + " Message: " + this.state.message);
      }


    render() {

        return (
            <Wrapper>
                <Tittle>Contact</Tittle>

                <form action="https://mailthis.to/danielaguilardomiguez@gmail.com" method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                    <WrapperInputText>
                        <TitleLabel>Your Name

                            <InputText type="text" name="name" value={this.state.name} onChange={this.handleInputChange}></InputText>
                        </TitleLabel>
                        <TitleLabel>Your Email
                            <InputText type="email" name="email" value={this.state.email} onChange={this.handleInputChange}></InputText>
                        </TitleLabel>
                        
                    </WrapperInputText>
                    <p></p>
                    <TitleLabel>Your Message
                        <TextArea type="text" name="message" value={this.state.message} onChange={this.handleInputChange}></TextArea>
                    </TitleLabel>
                    <Button type="submit" value="Submit">
                        <ButtonText>Submit</ButtonText>
                    </Button>
                </form>

               
            </Wrapper>
        );
    }
}

export default Forms;