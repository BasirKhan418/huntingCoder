import React, { useState } from 'react'
const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')
  const [btn, setbtn] = useState('Submit Now')
const handleSubmit=(e)=>{
  if(name.length!=0&&phone.length!=0&&email.length!=0&&desc.length!=0){
  e.preventDefault()
  const data={name, phone, email, desc}
  setbtn("Sending.....")
  fetch('http://localhost:3000/api/contactapi', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then((response)=>{
response.json()
}).then(()=>{
  setbtn("Submit Now");
  alert("Your form has been successfully submited");
  setemail('');
  setdesc('');
  setname('');
  setphone('');
  
})
  }
  else{
    alert("Please fill out this form to submit");
  }
}
  const handleChange = (e) => {
    if (e.target.name == 'phone') {
        setphone(e.target.value)
    }
    else if (e.target.name == 'email') {
        setemail(e.target.value)
    }
    else if (e.target.name == 'desc') {
        setdesc(e.target.value)
    }
    else if (e.target.name == 'name') {
        setname(e.target.value)
    }
}
  return (
    <>
      <div className="container my-4">
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" name="name" value={name} onChange={handleChange}/>
</div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name ="email" value={email} onChange={handleChange}/>
  <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" name="phone" value={phone} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="desc" value={desc} onChange={handleChange}></textarea>
</div>
<button className='btn btn-primary my-1'onClick={handleSubmit}>{btn}</button>
</div>
    </>
  )
}

export default Contact
