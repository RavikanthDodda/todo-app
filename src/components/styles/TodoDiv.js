import styled from 'styled-components';

const TodoDiv = styled.div`
width: 14rem;
height: 15rem;
box-sizing: border-box;
margin: 1.3rem 0.6rem;
display: flex;
flex-direction:  column;

div.items{
    overflow: auto;
    height: 12rem;

}
.title{
background-color: azure;

}
.item{
    background-color: greenyellow;
    margin:.3rem 0;

}

`;

export default TodoDiv;
