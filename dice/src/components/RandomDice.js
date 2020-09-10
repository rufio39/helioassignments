import React, { useState } from 'react'
import { Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import { makeDie } from '../lib'
import Die from './Die'


export default function RandomDice(props) {

    let [dice, setDice] = useState([])
    let [sides, setSides] = useState(2)

    const addDieOnClickHandler = (event) => {

        event.preventDefault()

        let copyDice = [...dice]

        copyDice.push(makeDie(sides))
        setDice(copyDice)
    }
    const sidesOnChangeHandler = (event) => {

        event.preventDefault()
        setSides(event.target.value)
    }

    return (
        <div>
            <h1>Random Dice Generator</h1>
            <h3>Create and roll dice</h3>
            <br></br>
            <Row>
                <Col >
                {
                    dice.map((die, index) => {
                        return (
                            <Die key={index} sides={die.sides}></Die>
                        )
                    })
                }
                </Col>
                <Col>
                    <InputGroup className="mb-3" style={{ width: '30rem' }}>
                        <FormControl
                            placeholder="number of sides on dice"
                            aria-label="number of sides on dice"
                            aria-describedby="basic-addon2"
                            onChange={sidesOnChangeHandler}
                            value={sides}
                            type="number"
                        />
                        <InputGroup.Append>
                            <Button variant="success" onClick={addDieOnClickHandler} >Add dice</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col></Col>
            </Row>
            <br></br>
        </div>
    )

}