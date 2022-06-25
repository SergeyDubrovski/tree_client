import React from "react";

import { Link } from "react-router-dom";


export default function StartPage() {
  return (
    <div>
 
      <h1 >Grow your plant</h1>

      <div className>
        <div>
 <Link to="/monitor">
          <button >
          Go to monitor
          </button>
        </Link>

        </div>

       
      </div>
    </div>
  );
}
