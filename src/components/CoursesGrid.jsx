import React from "react";
import { Link } from "react-router-dom";
import "../style/coursesGrid.css";

const courses = [
  { title: "Ms Office", path: "/ms-office" },
  { title: "Ms Office & Graphic", path: "/ms-office-graphic" },
  { title: "Graphic", path: "/graphic" },
  { title: "Digital Marketing (Smart Pro)", path: "/digital-marketing-smartpro" },
  { title: "Daraz", path: "/daraz" },
  { title: "Shopify", path: "/shopify" },
  { title: "Web Designing", path: "/web-designing" },
  { title: "Web Development", path: "/web-development" },
  { title: "WordPress", path: "/wordpress" },
  { title: "Video Editing", path: "/video-editing" },
  { title: "Computer Typing", path: "/computer-typing" },
  { title: "English Language", path: "/english-language" },
];

const CoursesGrid = () => {
  // Split courses into 4 columns (approximately equal)
  const colSize = Math.ceil(courses.length / 4);
  const columns = Array.from({ length: 4 }, (_, i) =>
    courses.slice(i * colSize, (i + 1) * colSize)
  );

  return (
    <div className="courses-container">
      {columns.map((col, i) => (
        <div className="course-column" key={i}>
          {col.map((course, idx) => (
            <Link to={course.path} className="course-link" key={idx}>
              {course.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CoursesGrid;
