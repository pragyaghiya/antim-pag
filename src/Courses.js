import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "./Components/Navbar/Button";
import { Link, useRouteMatch } from "react-router-dom";
import CourseData from "./Data";
import { Height } from "@material-ui/icons";

function Courses() {
  let match = useRouteMatch();

  return (
    <div>
      <div className="flex flex-row w-full justify-evenly mt-14 mb-8 px-8 gap-10">
        {CourseData.map((course) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="flex border: 5px solid rebeccapurple "
              variant="top"
              src={course.img}
            />
            <Card.Body>
              <Link to={`${match.url}/${course.id}`}>
                <Card.Title>{course.title}</Card.Title>
              </Link>
              <Card.Text>{course.content}</Card.Text>
              <Link to="/Checkout">
                <Button variant="primary">Add To Cart</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Courses;
