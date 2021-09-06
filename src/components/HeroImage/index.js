import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ image, title, text}) => (
    // You can send props to a component by first naming the prop and then you give it a value
    // In this case, its going to be from the props that this component (Wrapper) gets, there is going to be a prop named 'props.image'
    // The prop 'image' is being send to the component while it has the url for the props' image
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
};

export default HeroImage;