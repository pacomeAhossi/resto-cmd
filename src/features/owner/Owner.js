import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { ownerSlice } from "./ownerSlice";

export const Owner = () => {
    const store = useStore();
    const [owner, setOwner] = useState(store.getState().owner);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const firstName = evt.currentTarget.firstName.value;
        store.dispatch(ownerSlice.actions.updateFirstname(firstName));
    };
    
    useEffect(() => {
        store.subscribe(() => setOwner(store.getState().owner));
    })

    return(
            <form onSubmit={handleSubmit} className="OwnerForm">
                <h2>Propriétaire du restaurant</h2>
                {
                    owner?.firstName ? (
                        <span className="OwnerName">Le propriétaire du restaurant est {owner.firstName} </span>
                    ):
                    (
                        <span className="OwnerName">Le propriétaire du restaurant n'est pas configuré</span>
                    )
                }
                <label>
                    Prénom du propriétaire
                    <input type="text" name="firstName" />
                </label>
                <button type="submit">Configurer le propriétaire</button>
            </form>
    )
}