import React from "react"
import "./Loader.css"

const Loader = (props) => {    
    return(
        <div className={
            `${props.loading ? "flex" : "hidden"} items-center justify-center mt-2`}>
            <span className="loader loader-circle"></span>
        </div>
    );
}

export default Loader;