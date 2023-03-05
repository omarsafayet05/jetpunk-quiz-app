import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'

const Blog = () => {
    return (

        <div>
            <h2 className='txt-style'>Blog page</h2>
            <div className='Accordin-style'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> #1.Question: What is the purpose of using React Router?</Accordion.Header>
                        <Accordion.Body>
                            It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing.React Router also gives us access to browser history features while maintaining the correct view of the application.React Router uses a component-based approach to routing.

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>#2.Question: How does Context API work in React router?</Accordion.Header>
                        <Accordion.Body>
                            the React Context API is a way for a React app to effectively produce global variables that can be passed around.This is the alternative to
                            "Props drilling" or moving props from grandparent to child to parent ,and so on.Context is also touted as an easier lighter approach to state management using Redux.

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>#3.Question: What is useRef in React?</Accordion.Header>
                        <Accordion.Body>
                            Essentially, useRef
                            is like a "box" that can hold a mutable value in its .current property. You might be familiar with refs primarily as a to access the DOM.If you pass a ref object to React with div ref equal myRef in the curly brackets ,React will set it's .current property to the corresponding DOM node whenever that node changes. use useRef if you need to manage focus ,text selection,trigger imperative  animations or integrating third-party libraries.

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>






        </div>
    );
};

export default Blog;




