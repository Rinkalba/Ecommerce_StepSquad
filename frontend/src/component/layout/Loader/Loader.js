import React from 'react'
import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
          <Rings
            height="80"
            width="80"
            color="#9e665cab"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
        </div>
  )
}

export default Loader