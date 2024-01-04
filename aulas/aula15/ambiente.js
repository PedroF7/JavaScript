import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Pedro", "Freitas", "Santos"])

    const [users] = useState ([
      {id: 1, name: "Pedro", age: 16},
      {id:2, name: "Freitas", age: 17},
      {id:3, name: "Santos", age: 18},
    ])