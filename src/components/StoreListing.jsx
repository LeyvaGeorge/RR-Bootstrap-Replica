import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const StyledContainer = styled(Container)`
    margin-top: 40px;
    text-align: center;

`
const StyledRow = styled(Row)`
    borderBottom: 1px solid #E8E9EB;
    display: flex;
    justifyContent: space-evenly;

`

const circleDiv = styled.div`
width: 60px;
heigh: 60px;
background-color: red;
border: 1px solit red;
border-radius: 100%;
`

export default function StoreListing() {
    return <StyledContainer>
            <StyledRow>
                <Row>
                    <Col >
                        <circleDiv/>
                    </Col>
                    <Col >
                        <h5 style={ {fontWeight: 'bold'}}>ALDI</h5>
                        <p>Delivery and Pickup</p>
                    </Col>
                </Row>
                <Col sm='1'></Col>
                <Row>
                    <Col >
                        <circleDiv/>
                    </Col>
                    <Col >
                        <h5 style={ {fontWeight: 'bold'}}>Kroger</h5>
                        <p>Delivery and Pickup</p>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <circleDiv/>
                    </Col>
                    <Col >
                        <h5 style={ {fontWeight: 'bold'}}>Sprouts</h5>
                        <p>Delivery and Pickup</p>
                    </Col>
                </Row>
                
            </StyledRow>
        </StyledContainer>
    
}

