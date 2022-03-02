import styled from 'styled-components';

export const Container = styled.div`
    
    background: #026773;
    width: 550px;
    height: 400px;
    margin-top: 120px;
    border-radius: 50px 0 50px;
    box-shadow: 0 0 1em black;
 

    ul{
        background-color: #024959;
        width: 100%;
        height: 150px;
        border-radius: 50px 0 0 0;
        padding: 0;
     
    }
    div{
        text-align: center;
        width: 100%;
        height: 40vh;
      
    }
    div p:nth-child(2){
        font-size: 30px;
        font-weight: 700;
        margin: 0;
    }
    div p:nth-child(3){
        font-size: 20px;
        font-weight: 500;
        margin: 10px;
    }
    div p:nth-child(4){
        font-size: 15px;
        font-weight: 300;
        margin: 0;
    }
    @media only screen and (max-width: 600px) {
        background: #026773;
        width: 100%!important;
        height: 100%;
        margin-top: 120px;
        border-radius: 50px 0 50px;
        box-shadow: 0 0 1em black;
        display: block;

        ul{
            
        background: #026773;
        height: 0vh;
        border-radius: 150px 0 150px 0;
        }
    }  


`
