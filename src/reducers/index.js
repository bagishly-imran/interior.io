export const INITIAL_STATE = {
    counters : [
        {
            id: 1,
            label: "Successfully completed projects",
            number: 450,
            duration: 2,
            plus: "+"
        },
        {
            id: 2,
            label : "Highly specialised employees",
            number: 860,
            duration: 2,
            plus: ""
        }
    ]
}


export const reducer = (state = INITIAL_STATE, action) => {
    return state
}