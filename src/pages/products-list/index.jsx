import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { API_URLS } from '../../constants';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../../components/main/loader';
import Input from '../../components/main/search';
import Card from '../../components/main/products/card/index';
import './styles.css'

function ProductList (){
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [active, setActive] = useState(false);
    const [productFiltered, setProductFiltered] = useState([]);

    const { data: products, loading: loadingProducts, error: errorProducts  } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);

    const onShowDetails = (id) => {
        navigate(`/products/${id}`)
    }

    const filterBySearch = (query) => {
        let updateProductList = [...products];

        updateProductList = updateProductList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
    
        setProductFiltered(updateProductList);
    }

    const onChange = (event) => {
        const value = event.target.value;
        setSearch(value);
        filterBySearch(value);
    }

    const onFocus = () => {
        setActive(true);
    }

    const onBlur = () => {
        setActive(false);
    }
    return (
        <>
        <div className='inputContainer'>
                <Input 
                    placeholder='busca un producto'
                    id='task'
                    required={true}
                    name='Search'
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    active={active}
                />
        </div>
        <div className='cardContainer'>
                {loadingProducts && <Loader />}
                {errorProducts && <h2>{error}</h2>}
                { search.length > 0 && productFiltered.length === 0 && <h2>Product not found</h2>}
                { search.length > 0 ? (
                    productFiltered.map((product) => (
                        <Card key={product.id} {...product} onShowDetails={onShowDetails} />
                    ))
                    ) : (
                        products.map((product) => (
                            <Card key={product.id} {...product} onShowDetails={onShowDetails} />
                        ))
                    )   
                }
            </div>
            </>
        )
}

export default ProductList;