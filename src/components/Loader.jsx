import React from 'react'

function Loader() {
  return (
        <div className="spin">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
  )
}

export default Loader