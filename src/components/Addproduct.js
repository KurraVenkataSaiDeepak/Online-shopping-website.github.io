import React, { Component } from 'react'
import{Button,Modal, ModalBody, ModalFooter,Row , Col , Form}from 'react-bootstrap'
import {useState} from 'react'
export class Addproduct extends Component {
  constructor() {
    super()
    this.state = {
      show : false
    }
    
  }
  handleModal() {
    this.setState({show:!this.state.show})

  };
  additem() {
    
  }
  
  render() {
    return (
      <div>
        <Button onClick={()=> {this.handleModal()}}>Add product</Button>
        <Modal
      show={this.state.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div >
          <Row>
            <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="ProductName">
                  <Form.Label>ProductName</Form.Label>
                  <input type="text"  name="ProductName" required placeholder="Product Name" />
                  <Form.Label>Product price</Form.Label>
                  <input type="number" placeholder="price" ></input>
                  <Form.Label>ProductDescription</Form.Label>
                  <Form.Control type="text"  name="ProductName" required placeholder="Product Description" />
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" name="image" required placeholder="Product Image" />

                </Form.Group>
                
              </Form> 
                
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=> {this.handleModal()}}>Close</Button>
        <Button onClick={()=> {this.additem()}}>submit</Button>
      </Modal.Footer>
    </Modal>
      </div>
    )
  }
}

export default Addproduct
