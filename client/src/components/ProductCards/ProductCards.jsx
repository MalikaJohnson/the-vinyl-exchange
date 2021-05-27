import { useState, useEffect } from "react"
import "./ProductCards.css"
import ProductCard from "../ProductCard/ProductCard"
import { getProducts } from "../../services/products"

const ProductCards = () => {
  const [products, setProducts] = useState([])

  // getProducts still needs to be created in services when API is working
  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
    }
    fetchProducts()
  }, [])

  const cards = products.map((product, index) => (
    <ProductCard
      _id={product._id}
      name={product.name}
      imgURL={product.imgURL}
      key={index}
    />
  ))

  return (
    <div className="product-cards">
      <div className="cards">{cards}</div>
    </div>
  )
}

export default ProductCards
