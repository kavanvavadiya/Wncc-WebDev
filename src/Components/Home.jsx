import React from 'react'
import Card from './Card';

export default function Home(props) {
  console.log(props.lists)
  return (
    <div className='container'>
      <Card / >
      <h1 className="text-center my-4">
        Registered list
      </h1>

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Type</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room No.</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {props.lists.length === 0 ? "" :
            props.lists.map((list) => {
              console.log(list.sno);
              let key=list.sno
              return ( 
                <tr>


                  <th scope="row">{key +1}</th>
                  <td>{list.type}</td>
                  <td>{list.name}</td>
                  <td>{list.email}</td>
                  <td>{list.roomNo}</td>
                  <td><button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(list)}}>Delete</button> </td>
                </tr>
              )
            })
          }


        </tbody>
      </table>

    </div>
  )
}
