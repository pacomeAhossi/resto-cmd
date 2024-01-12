import { useSelector, useStore } from "react-redux";
import { SuperCremeux } from "../../common/models";
import { getProductList } from "../../app/selectors";

export const Cart = () => {
    const store = useStore();
    const list = useSelector(getProductList);

    return (
        <div className="Selection">
            <h1>Choisir son menu</h1>
            <div className="CartNavBar">
                <button onClick={() =>
                        store.dispatch({ type: "ADD_PRODUCT", payload: SuperCremeux })
                    }
                >
                    Ajoutez un super crémeux
                </button>
            </div>
            {
                list?.map(
                    (item, index) => <span key={index} className="SelectedProduct">{item.title} {item.price} £</span>
                )
            }
            
        </div>
    )
} 