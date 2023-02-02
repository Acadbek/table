import React from "react";
import { useParams, Link } from "react-router-dom";

const Slug = ({ data }) => {
  const params = useParams();
  console.log(data, "data");

  // console.log(param);
  return (
    <div>
      Slug
      {params.title}
      <Link to={params.title} className="bg-red-400 px-2 ml-4">
        click
      </Link>
    </div>
  );
};

export default Slug;
