const initalState = {
    data : [
        {
        "id" : 1,
        "name" : "Sachin",
        "designation" : "Developer",
        "department" : "Marketing"
        },
        {
        "id" : 2,
        "name" : "Anil",
        "designation" : "Quality",
        "department" : "Administration"
        },
        {
        "id" : 3,
        "name" : "Sunil",
        "designation" : "Manager",
        "department" : "Development"
        },
        {
        "id" : 4,
        "name" : "Pramod",
        "designation" : "Sr Manager",
        "department" : "Marketing"
        },
        {
        "id" : 5,
        "name" : "Kunal",
        "designation" : "Jr. Developer",
        "department" : "Administration"
        },
        {
        "id" : 6,
        "name" : "Vishal",
        "designation" : "Dev Ops",
        "department" : "Development"
        },
        {
        "id" : 7,
        "name" : "Santosh",
        "designation" : "Field Manager",
        "department" : "Marketing"
        },
        {
        "id" : 8,
        "name" : "Kewal",
        "designation" : "IT Manager",
        "department" : "Administration"
        },
        {
        "id" : 9,
        "name" : "Swati",
        "designation" : "IOS Developer",
        "department" : "Development"
        },
        {
        "id" : 10,
        "name" : "Tushar",
        "designation" : "Team Lead",
        "department" : "Marketing"
        },
        {
        "id" : 11,
        "name" : "Nitin",
        "designation" : "Tech Support",
        "department" : "Administration"
        },
        {
        "id" : 12,
        "name" : "Prafull",
        "designation" : "Java Developer",
        "department" : "Development"
        },
        ]
}



function rootReducer(state=initalState, action){
    switch(action.type){
        case 'UPDATE' :
            return {data : action.payload}        
        default :
            return state
    }
}

// export const update =(payload)=>({
//     type: 'UPDATE',
//     payload
// })

export default rootReducer;