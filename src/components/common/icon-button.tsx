import React from 'react'

interface IconButtonProps {
    className: string;
    altText: string;
}

const IconButton = ({
    className,
    altText
}: IconButtonProps) => {
    return (
        //   <button className="btn-secondary">
        //       <span aria-hidden="true">
        //           <i className={className}></i>
        //       </span>
        //   </button>
        <div>
            <a role="button" style={{opacity: .5}}>
                <span aria-hidden="true">
                    <i className={className}></i>
                </span>
                <span className="sr-only">{altText}</span>
            </a>
        </div>
    )
}

export default IconButton
