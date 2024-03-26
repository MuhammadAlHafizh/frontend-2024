import React from 'react'

const Content = () => {
  const objListUsers = [
    {
        name : 'Muhammad Al Hafizh',
        age  : 22,
    },
    {
        name : 'Djarwo Eko Prasojo',
        age  : 29,
    },
    {
        name : 'Made Irawan',
        age  : 23,
    },
    {
        name : 'Bayu Ismail',
        age  : 23,
    },
  ];
  return (
    <div>
        <ul>
            {objListUsers.map((row, index) => (
            <li key={index}>
                <p>Name: {row.name}</p>
                <p>Age: {row.age}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Content
