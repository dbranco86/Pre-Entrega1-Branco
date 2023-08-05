import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext, memo } from 'react';
import { CartContext } from '../../components/context/cart-context';
import fixedProducts from '../../constants';
import Input from '../../components/main/search';
import Card from '../../components/main/products/card/index';
import './styles.css';

function ProductList() {
    const [search, setSearch] = useState('');
    const [active, setActive] = useState(false);
    const [productFiltered, setProductFiltered] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedCategory = queryParams.get('category');
    const navigate = useNavigate();
    const products = fixedProducts;

    const { setProducts, products: productsContext, onAddToCart, cart } = useContext(CartContext);

    useEffect(() => {
        filterProducts();
        window.scrollTo(0, 0);
    }, [selectedCategory, search]);

    const onShowDetails = (id) => {
        window.scrollTo(0, 0);
        navigate(`/products/${id}`);
    };

    const filterProducts = () => {
        let updatedProductList = [...products];

        if (selectedCategory) {
            updatedProductList = updatedProductList.filter(
                (item) => item.category === selectedCategory
            );
        }

        if (search) {
            updatedProductList = updatedProductList.filter(
                (item) => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
            );
        }

        setProductFiltered(updatedProductList);
    };

    const onChange = (event) => {
        const value = event.target.value;
        setSearch(value);
    };

    const onFocus = () => {
        setActive(true);
    };

    const onBlur = () => {
        setActive(false);
    };

    useEffect(() => {
        if (products?.length > 0) {
            setProducts(products);
        }
    }, [products, setProducts]);

    return (
        <>
            <div className="inputContainer">
                <Input
                    placeholder="busca un producto"
                    id="task"
                    required={true}
                    name="Search"
                    value={search}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    active={active}
                />
            </div>
            <div className="cardContainer">
                {search.length > 0 && productFiltered.length === 0 && (
                    <h2>Producto no encontrado</h2>
                )}
                {productFiltered.map((product) => (
                    <Card
                        key={product.id}
                        {...product}
                        onShowDetails={onShowDetails}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </>
    );
}

export default memo(ProductList);
