import { useNavigate, useParams } from 'react-router-dom';
import fixedProducts from '../../constants';
import Details from '../../components/main/products/details';
import Loader from '../../components/main/loader';
import './styles.css';

function ProductDetail() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const product = fixedProducts.find((product) => product.id === productId);

        return (
        <>
            <div className="headerDetailContainer">
                <button onClick={() => navigate(-1)} className="backButton">
                    &#8592; Regresar
                </button>
                {product ? (
                    <Details {...product} />
                ) : (
                    <>
                    <p>Product not found</p>
                        <Loader />
                    </>
                )}
            </div>
        </>
    );
}

export default ProductDetail;
