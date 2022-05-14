// nested mapping
import React from "react";

const users = [
    {
        fullName : "Kazi Tanvirul Islam",
        age : 32,
        phones : [
            {home : "0721-770879"},
            {office : "01728-031062"}
        ],
    },
    {
        fullName : "Kazi Raihanul Islam",
        age : 26,
        phones : [
            {home : "0721-770879"},
            {office : "01724-113114"}
        ],
    },
];

export default function App2(){
    return(
        <div>
            <h1>Nested Lists</h1>
            {
                users.map((user, index) => (
                    <article key = {index}>
                        <h3>Full Name : {user.fullName}</h3>
                        <p>Age : {user.age}</p>
                        {
                            user.phones.map((phone, index) => 
                                (<div key = {index}>
                                    <p>{phone.home}</p>
                                    <p>{phone.office}</p>
                                </div>))
                        }
                    </article>
                ) )
            }
        </div>
    )
}