import { useStore } from "react-redux";

export const Cart = () => {
    const store = useStore();

    return (
        <div className="Selection">
            <h1>Liste des produits sélectionnés</h1>
            {
                store.getState().list.map(
                    (item, index) => <span key={index} className="SelectedProduct">{item.title} {item.price} £</span>
                )
            }
        </div>
    )
} 