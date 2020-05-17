import React from 'react'

const TrainingInfo = (props) => {
    return (
        <div className="mt-8 flex justify-around items-center h-16 light-grey-bg rounded-lg">
            <p type="text" className="hidden">{props.training.id}</p>
            <p className="dark-grey text-lg gotham-medium">{props.training.trainingTypeName}</p>
            <p className="dark-grey gotham-medium">{props.training.creationDate}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24.717" viewBox="0 0 15 24.717"><path d="M42.1,50.976l-11,11a1.358,1.358,0,0,1-1.921,0l-1.283-1.283a1.358,1.358,0,0,1,0-1.919l8.718-8.759L27.89,41.257a1.358,1.358,0,0,1,0-1.919l1.283-1.283a1.358,1.358,0,0,1,1.921,0l11,11A1.358,1.358,0,0,1,42.1,50.976Z" transform="translate(-27.494 -37.657)" fill="rgba(255,159,46,0.56)" opacity="0.85"/></svg>
        </div>
    )
}

export default TrainingInfo
