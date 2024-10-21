import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/products', product)
            .then(response => {
                console.log('Product added:', response.data);
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Name</label>
                <input
                    type="text"
                    value={product.name}
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                />
            </div>
            <div>
                <label>Price</label>
                <input
                    type="number"
                    value={product.price}
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={product.description}
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
