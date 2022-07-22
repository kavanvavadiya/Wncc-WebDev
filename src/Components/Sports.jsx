import React, { useState } from 'react';

export default function Sports(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roomNo, setRoomNo] = useState("");



  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !roomNo) {
        alert("Name or Email or RoomNo cannot be blank");
    }
    else {
        props.addList("Sport",name,email,roomNo);
        setName("");
        setEmail("");
        setRoomNo("");
        props.showAlert("Registered Successfully", "success")
    }
}
  return (
    <div className='container'>
      <form onSubmit={submit} className="my-5">
      <h2 className='text-center'>Sports Registration</h2>
        <div className="mb-3 form-floating">
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="floatingInput" placeholder="Enter your name" />
          <label htmlFor="floatingInput" >Name</label>
        </div>
        <div className="mb-3 form-floating">
          <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="mb-3 form-floating">
          <input type="number" name='number' value={roomNo} onChange={(e) => setRoomNo(e.target.value)} className="form-control" id="floatingInput" placeholder="Enter your Room No." />
          <label htmlFor="floatingInput">Room No.</label>
        </div>
        <button type="submit" className="btn btn-sm btn-success">Register</button>
      </form>
    </div>
  )
}