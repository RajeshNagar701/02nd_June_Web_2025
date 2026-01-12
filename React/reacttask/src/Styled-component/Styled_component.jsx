/*

styled-components is the result of wondering how we could enhance CSS for styling 
React component systems. By focusing on a single use case we managed to optimize the 
experience for developers as well as the output for end users.

Apart from the improved experience for developers, styled-components provides:

Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.
No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.
Easier deletion of CSS: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.
Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
Painless maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.
Automatic vendor prefixing: write your CSS to the current standard and let styled-components handle the rest.
You get all of these benefits while still writing the CSS you know and love, just bound to individual components.

npm install styled-components

*/

import React from 'react'
import styled from 'styled-components'


function Styled_component() {

    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
    const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

    const Basic = styled.button`
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    color:white;
    display:block;
    margin:0 auto;
    background-color:LightGray;
    `;

    const Btn_red = styled(Basic)`
    background-color:red;
  `;

    const Btn_green = styled(Basic)`
    background-color:green;
  `;

    const Btn_blue = styled(Basic)`
    background-color:blue;
  `;
    const Btn_orange = styled(Basic)`
    background-color:orange;
  `;

    const AdvBtn = styled.button`
    border:2px solid palevioletred;
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:none;
    color:palevioletred;
    display:block;
    margin:0 auto;
    &:hover{
            background : palevioletred;
            color:white;
    }
`

    const TwoWayBtn = styled.button`
    border:2px solid palevioletred;
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:${props=>props.primary ? "palevioletred" : "white"};
    color:${props=>props.primary ? "white" : "palevioletred"};
    display:block;
    margin:0 auto;
    `

    return (
        <div>
            <Wrapper>
                <Title>
                    Hello World!
                </Title>
            </Wrapper>

            <Basic>Basic Btn</Basic>
            <Btn_red>Red Button</Btn_red>
            <Btn_blue>Blue Button</Btn_blue>
            <Btn_green>Green Button</Btn_green>
            <Btn_orange>Orange Button</Btn_orange>

            <AdvBtn>
                Advance Btn
            </AdvBtn>

            <hr />

            <TwoWayBtn>TwoWay</TwoWayBtn>
            <TwoWayBtn primary>TwoWay</TwoWayBtn>

            <hr />

            <br /><br /><br />
        </div>
    )
}

export default Styled_component