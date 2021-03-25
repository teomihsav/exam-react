

import React from "react";
import ReactDOM from "react-dom";

import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { animated } from "react-spring/renderprops";
import { Transition } from 'react-spring/renderprops'

const TestSlide = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`;

function TestScreen1() {
    return <TestSlide bgColor="grey">Im number 1</TestSlide>;
}
    
function TestScreen2() {
    return <TestSlide bgColor="aqua">Im number 2</TestSlide>;
}

function TestScreen3() {
    return <TestSlide bgColor="green">Im number 3</TestSlide>;
}

const testScreens = [TestScreen1, TestScreen2, TestScreen3];

const Container = styled("div")`
  height: 100px;
  
  position: relative;
  width: 50%;
  cursor: pointer;  
  & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

class TSlide extends React.Component {
    state = {
        index: 0
    };

    toggle = e =>
        this.setState(state => ({
            index: state.index === 2 ? 0 : state.index + 1
        }));
    render() {
        const { index } = this.state;
        return (
            <div>
                <Container onClick={this.toggle}>
                    <Transition
                        native
                        reset
                        unique
                        items={index}
                        from={{ opacity: 0, transform: "translate3d(100%, 0 ,0)" }}
                        enter={{ opacity: 1, transform: "translate3d(0%, 0, 0)" }}
                        leave={{ opacity: 0, transform: "translate3d(-50%, 0, 0)" }}
                    >
                        {index => style => (
                            <animated.div style={{ ...style }}>
                                {React.createElement(testScreens[index])}
                            </animated.div>
                        )}
                    </Transition>
                </Container>
            </div>
        );
    }
}

export default TSlide