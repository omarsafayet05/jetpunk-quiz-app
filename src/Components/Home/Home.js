
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import img1 from '../../Image/ReactJS_Development_Services_feature_image.png'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from '../Cart/Cart';
import './Home.css'




const Home = () => {

    const [carts, setCarts] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const cartsLoaded = data.data.data;
                const cartData = cartsLoaded.map(cart => {
                    const singleCart = {
                        name: cart.name,
                        total: cart.total,
                        logo: cart.logo,
                        id: cart.id
                    }
                    return singleCart


                })
                console.log(cartData);
                setCarts(cartData)
            });
    }, [])



    const [recharts, setRecharts] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const rechartsLoaded = data.data.data;
                const rechartData = rechartsLoaded.map(rechart => {
                    const singleChart = {
                        name: rechart.name,
                        total: rechart.total
                    }
                    return singleChart


                })
                console.log(rechartData);
                setRecharts(rechartData)
            });
    }, [])




    return (
        <Container fluid="md">
            <Row>
                <div className='col-sm col-md d-flex justify-content-center'>
                    <Col>

                        <img src={img1} alt='' className='img-fluid'></img>

                    </Col>
                </div>


                <Col className="col-lg-4">
                    <div className='col-md-12 col-sm-12 d-flex justify-content-center'>
                        <Card style={{ width: '18rem' }} className="mt-5">
                            <Card.Body>
                                <Card.Title>Programming Tests</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">React,Git,Javascript & CSS</Card.Subtitle>
                                <Card.Text>
                                    For many coding jobs, it's essential that candidates are proficient in a given programming language. Evaluating their proficiency in that language can be difficult, particularly if you lack in-house expertise. JetPunk's programming tests allow you to determine applicants' coding ability efficiently and at scale. Click on any of the tests below to find out how they work.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

            </Row>

            <div className='mt-5 carts-style'>

                {
                    carts.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                    ></Cart>)


                }


            </div>

        </Container >
    );
};

export default Home;




