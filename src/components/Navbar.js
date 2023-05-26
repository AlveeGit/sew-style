import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



export default function App() {
  

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">All Product </Link>
        </span>
        <MDBBtn color="light">
          <Link to="/cart">Cart()</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}