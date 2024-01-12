import { useStore } from "react-redux";
import { SuperCremeux } from "../../common/models";
import { useEffect, useState } from "react";

export const Cart = () => {
    const store = useStore();
    const [list, setList] = useState(store.getState().list);

    useEffect(() => {
        store.subscribe(() => setList(store.getState().list));
    });
    
    return (
        <div className="Selection">
            <h1>Vos produits sélectionnés</h1>
            {
                list.map(
                    (item, index) => <span key={index} className="SelectedProduct">{item.title} {item.price} £</span>
                )
            }
            
            <div className="CartNavBar">
                <button onClick={() =>
                        store.dispatch({ type: "ADD_PRODUCT", payload: SuperCremeux })
                    }
                >
                    Ajoutez un super crémeux
                </button>
            </div>
        </div>
    )
} 