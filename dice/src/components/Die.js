import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import { randomNumber } from '../lib'

const Die = (props) => {

    let [roll, setRoll] = useState(0)

    const rollDie = () => {
        setRoll(randomNumber(1, props.sides))
    }

    React.useEffect(rollDie, [])

    return (

        <div>
            <Card style={{ width: '10rem' }} >
                <Card.Img variant="top" src="https://rb.gy/yfhw1x" />
                <Card.Body>
                    <Card.Title>{`${props.sides} SIDED DIE`} click roll to get a random dice roll</Card.Title>
                    <Card.Text>
                        {`${roll}`}
                    </Card.Text>
                    <Button variant="outline-primary" onClick={rollDie}>Roll</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Die; 