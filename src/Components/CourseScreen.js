import React from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import CourseData from "../Data";

export default function CourseScreen(props) {
  let match = useRouteMatch();
  let { courseId } = useParams();
  const course = CourseData.find((x) => x.id === courseId);
  if (!course) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 flex flex-col gap-10 p-4">
        <div className="text-3xl font-extrabold">{course.title}</div>
        <div className="text-xl font-semibold"> {course.content} </div>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <img src={course.img} className="rounded-lg shadow-md" />
        <div className="flex flex-col gap-2">
          <button className="p-2 bg-purple-800 text-white">Add to Cart</button>
          <button className="p-2 bg-purple-800 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

// export default CourseScreen;
