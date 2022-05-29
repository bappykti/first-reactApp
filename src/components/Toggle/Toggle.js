// toggle
import React, {useState} from "react";

const Toggle = () => {
    const [toggle, setToggle] = useState(true);
    // alert(toggle);
  return (
    <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>This is Toggle</h1>
     {toggle && (
          <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
     )}
      <div style={{ textAlign: "center" }}>
        <button onClick={()=> {setToggle(!toggle)}}
          style={{ margin: "10px", padding: "10px", borderRadius: "5px" }}>
          {toggle ? "Hide" : "Show"}
        </button>
        {/* <button onClick={()=> {setToggle(true)}}
          style={{ margin: "10px", padding: "10px", borderRadius: "5px" }}>
          Show
        </button> */}
        {/* <button onClick={()=> {setToggle(false)}}
          style={{ margin: "10px", padding: "10px", borderRadius: "5px" }}>
          Hide
        </button> */}
      </div>
    </div>
  );
};

export default Toggle;
