import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from '../../common/components/ProductCard'
import * as ProductList from '../../common/models'
import { addProductThunk } from '../cart/cartSlice'
import { useEffect } from 'react'
import { getUnavailableThunk } from './menuSlice'
import { getUnavailableProducts } from '../../app/selectors'

export const Menu = () => {
    const dispatch = useDispatch()
    const unavailableProducts = useSelector(getUnavailableProducts)
    
    useEffect(() => {
        dispatch(getUnavailableThunk())
    })

    return <div className="Menu">
        {
            Object.values(
                ProductList
            ).map(
                product => <ProductCard key={product.title} unavailable={unavailableProducts?.includes(product.title)} product={product} onSelect={() => dispatch(addProductThunk(product))} />
            )
        }

    </div>
}