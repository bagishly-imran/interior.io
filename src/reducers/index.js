import Service1Svg from '../images/services1.svg';
import Service2Svg from '../images/services2.svg';
import Service3Svg from '../images/services3.svg';

export const INITIAL_STATE = {
    counters : [
        {
            id: 1,
            label: "Successfully completed projects",
            number: 450,
            duration: 20,
            plus: "+"
        },
        {
            id: 2,
            label : "Highly specialised employees",
            number: 860,
            duration: 20,
            plus: ""
        }
    ],
    services : [
        {
            id: 1,
            linkName: "Home Interior",
            paragraph: "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
            image: Service1Svg
        },
        {
            id: 2,
            linkName: "Party Interior",
            paragraph: "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
            image: Service2Svg
        },
        {
            id: 3,
            linkName: "Office Interior",
            paragraph: "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
            image: Service3Svg
        }
    ],
    testminoials : [
        {
            id: 1,
            title : "This design service",
            comment : "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
            fullname : "John Doe"
        },
        {
            id: 2,
            title : "What a great experience!",
            comment : "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
            fullname : "Sarah Doe"
        },
        {
            id: 3,
            title : "I would recommend this design service",
            comment : "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
            fullname : "Lora Rodrigues"
        },
        {
            id: 4,
            title : "Brilliant work",
            comment : "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
            fullname : "John Smith"
        },
        {
            id: 5,
            title : "Will definitely be using Franclin again",
            comment : "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
            fullname : "Willam Scott"
        },
        {
            id: 6,
            title : "I would recommend this design service",
            comment : "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
            fullname : "Adam Johnson"
        },
    ]
}



export const reducer = (state = INITIAL_STATE, action) => {
    return state
}