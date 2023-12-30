function Card ({image, title, subtitle, message}) {
    return (
        <div className="container">
            <div className="box1">
                <img src={image} alt='card-logo'/>
            </div>
            <div className='box2'>
                <div className='titles'>
                   <h2>{title}</h2>
                <h6>{subtitle}</h6> 
                </div>
                <div className='description'>
                    <p>{message}</p>
                </div>
                
            </div>
        </div>
    )
}


export default Card