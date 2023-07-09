import { useNavigate, useParams } from 'react-router-dom';
import { API_URLS } from '../../constants';
import { useFetch } from '../../hooks/useFetch';
import Details from '../../components/main/products/details'
import Loader from '../../components/main/loader';
import './styles.css'

function ProductDetail (){
    const { productId} = useParams();
    const navigate = useNavigate();
    const urlProductDetail = `${API_URLS.PRODUCTS.url}/${productId}`

    const { data, loading, error  } = useFetch(urlProductDetail, API_URLS.PRODUCTS.config);
    const history = window.history;
    return(
        <>
            <div className='headerDetailContainer'>
            {history.length > 1 ? (<button onClick={() => navigate(-1)} className='backButton'> &#8592; Regresar</button>) : null}
                {loading && (
                <div className='loaderContainer'>
                    <Loader />
                </div>
                )}
                {error && <p>Something went wrong</p>}
                {<Details {...data} />}
            </div>
        </>
    )
}

export default ProductDetail