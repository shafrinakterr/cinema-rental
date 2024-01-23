/* eslint-disable react/prop-types */
import star from '../../src/assets/star.svg'
const Rating = ({value}) => {
    const stars = Array(value).fill(star);
    return (
        <>
            {
                stars.map((star, index)=>(
                    <img 
                    key={index} 
                    src={star} 
                    alt="start" 
                    width='14'
                    height='14' 
                    />
                ))
            }   
        </>
    );
};

export default Rating;