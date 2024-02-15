import React from 'react'
import useFetch from '../hook/useFetch'

function Todos() {
    const result = useFetch("https://jsonplaceholder.typicode.com/todos")
    console.log(result);

  return (
    <>
    <h1 className='text-center text-primary m-5'>All Todos List</h1>
    <div className='container'>
        <table className='table shadow mt-5'>
            <thead>
                <tr>
                    <th>USERID</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>COMPLETED</th>
                </tr>
            </thead>
            <tbody>
                {
                    result?.length>0? result.map((todo,index)=>(
                        <tr key={index} >
                        <td>{todo.userId}</td>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed?"yes":"no"}</td>
                    </tr>
                    )):<tr className='text-danger fs-4 fw-bolder'>Nothing to display!!!</tr>

                }
            </tbody>
        </table>
    </div>
    </>
    
  )
}

export default Todos