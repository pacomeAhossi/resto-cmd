import { configureStore } from "@reduxjs/toolkit";

let state = {
    value: null,
    owner: {},
    list: [
    ]
};

// const PRODUCT_LIST = {
//     DoubleCantal,
//     PouletCroquant,
//     SuperCremeux

// };

function reducer(state, action){
    switch (action.type) {
        case "ADD_PRODUCT":
            const listWithNewProduct = [...state.list, action.payload]
            return {...state, list: listWithNewProduct}
            
        case "REMOVE_PRODUCT":
            const list = state.list.filter((item, index) => index !== action.payload)
            return {...state, list: list}
        case "APPLY_VOUCHER":
            const withVoucherList = state.list.map(
                (item) => item.title === 'Super Crémeux' ? ({...item, price: action.payload.price}) : {...item})
                return {...state, list: withVoucherList}
        case "UPDATE_FIRSTNAME":
            const owner = {...state.owner, firstName: action.payload}
            return {...state, owner}
        default:
            return state;
    }
}

export const store = configureStore({
    preloadedState: state,
    reducer,
});

// store.subscribe(() => {
//     const state = store.getState();
//     if(state.owner){
//         document.querySelector(".header").textContent = `Le propriétaire du restaurant est ${state.owner.firstName}`;
//     }
//     if(state.list){
//         document.getElementById("command").innerHTML = `<h2>Vous avez selectionnés les produits suivants :</h2>`;
//         for(const item of state.list){
//             const itemElement = document.createElement("div");
//             itemElement.innerHTML = `
//                 <div>
//                     ${item.title} <span>${item.price}</span>
//                     <button >remove</button>
//                 </div>
//             `;
//             document.getElementById("command").appendChild(itemElement);
//         }
//     }
// })

// document.querySelectorAll(".orderButton").forEach((element) => {
//     element.addEventListener("click", (event) => {
//         const productId = event.target.dataset['id'];
//         store.dispatch(
//             {type: 'ADD_PRODUCT', payload: PRODUCT_LIST[productId]}
//         )

//     })
// });

// document.getElementById("voucher").addEventListener("click", (evt) => {
//     store.dispatch(
//         {type: 'APPLY_VOUCHER', payload: {price : 4.00}}
//     )
// })

// document.getElementById("addForm").addEventListener("submit", (evt) =>{
//     evt.preventDefault();
//     const firstNameInput = evt.currentTarget.firstName;
//     store.dispatch(
//         {type: 'UPDATE_FIRSTNAME', payload: firstNameInput.value}
//     )
// })

// dispatch({...state, company: {name: 'Burger du Pré'}})
