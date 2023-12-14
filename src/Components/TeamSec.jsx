import React from 'react'
import team1 from '../assets/images/bullister.png'
import team2 from '../assets/images/salvador.png'
import team3 from '../assets/images/meta-bully.png'
import { Row, Container, Col } from 'react-bootstrap'
const teams = [
    {
        team1: team1,
        haddingt: "Prime Bullister ",
        teamp: "Pruduct Designer",
        alt: 'image'
    },
    {
        team1: team2,
        haddingt: "Solvador Bulli ",
        teamp: "Artist",
        alt: 'image'
    },
    {
        team1: team3,
        haddingt: "Meta Bully ",
        teamp: "Pruduct Designer",
        alt: 'image'
    },
]

const Team = () => {
    const teamc = teams.map((teamc) => (
        <Col lg={4} md={6} xs={12} className='mb-3'>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <img src={teamc.team1} alt="teamc.alt" />
                <h2 className=' ff-poppins fs-xl fw-semibold text-white lh-136 pt-3 m-0 '>{teamc.haddingt}</h2>
                <p className='fs-md ff-poppins fw-normal lh-136 text-white '>{teamc.teamp}</p>
            </div>
        </Col>
    ))
    return (
        <div className='bg-blue pt-sm-5' id="team">
            <Container>
                <h3 className="fs-xl1 fw-medium text-white lh-136 text-center mt-5 pb-5 ff-poppins ">Our Team</h3>
                <Row>
                    {teamc}
                </Row>
            </Container>
        </div>
    )
}

export default Team