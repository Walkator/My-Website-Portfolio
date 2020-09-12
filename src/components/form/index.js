import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 900px;
    left: 0px;
    top: 50px;
    margin: auto;
`;

const Tittle = styled.h1`
    position: relative;
    width: 95%;
    height: 0%;
    left: 0px;
    top: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: auto;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #222831;
`;

const Description = styled.h1`
    position: relative;
    width: 95%;
    height: 0px;
    left: 0px;
    top: 30px;

    margin: auto;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

    padding-bottom: 65px;
`;

const WrapperInputText = styled.div`
    width: 65%;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const InputText = styled.input`
    position: relative;
    width: 80%;
    padding: 15px 20px;
    margin: 6px;
    color: #222831;

    max-width: 500px;
    border: none;
    border-radius: 8px;
    border: 1px solid #00adb5;
`;

const TextArea = styled.textarea`
    position: relative;
    width: 80%;
    height: 150px;
    left: 0px;
    padding: 12px 30px;
    margin: 0px;
    color: #222831;

    max-width: 500px;
    border: none;
    border-radius: 8px;
    border: 1px solid #00adb5;
    resize: none;

    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    border: 2px solid #00adb5;
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

    color: #00adb5;
    &:hover {
        cursor: pointer;
        color: #00d9e3;
    }
`;

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name: "",
        email: "",
        message: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
        [name]: value,
        });
    }

    //handleSubmit(event) {
    //  alert("Name: " + this.state.name + " Email: " + this.state.email + " Message: " + this.state.message);
    //}

    render() {
        return (
        <Wrapper>
            <Tittle>Contact</Tittle>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}</Description>
            
            <form action="https://mailthis.to/email@example.com" method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <WrapperInputText>
                    <TitleLabel>Your Name
                        <InputText type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Jhon"></InputText>
                    </TitleLabel>
                    <TitleLabel>Your Email
                        <InputText type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="example@example.com"></InputText>
                    </TitleLabel>
                    <TitleLabel>Your Message
                        <TextArea type="text" name="message" value={this.state.message} onChange={this.handleInputChange} placeholder="Hello,..."></TextArea>
                    </TitleLabel>
                </WrapperInputText>
                <p></p>
                <Button type="submit" value="Submit">
                    <ButtonText>Submit</ButtonText>
                </Button>
            </form>
        </Wrapper>
        );
    }
}

export default Form;
