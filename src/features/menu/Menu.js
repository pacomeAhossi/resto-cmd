import { useDispatch } from 'react-redux'
import { ProductCard } from '../../common/components/ProductCard'
import * as ProductList from '../../common/models'
import { addProduct } from '../../app/store'

export const Menu = () => {
    const dispatch = useDispatch()
    return <div className="Menu">
        {
            Object.values(
                ProductList
            ).map(
                product => <ProductCard key={product.title} product={product} onSelect={() => dispatch(addProduct(product))} />
            )
        }

    </div>
}