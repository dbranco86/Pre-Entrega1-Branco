import './styles.css'

const ProductClass = ({image, name }) => {

    return (
        <div className='imageClassContainer'>
            <img className='imageClass' src={image} alt={name} />
        </div>
    )
}

export default ProductClass;