import React, {useState} from 'react'

const Inputs =() =>{

  const [userRegistration, setUserRegistration]= useState({
      Name:"",
      email:"",
      number:"",
      courses:"",
      country:"",
      birthday:""
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) =>{
    const name= e.target.name;

    const value= e.target.value;

    setUserRegistration({...userRegistration, [name]:value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();

    const newRecord = {...userRegistration, id: new Date().getTime().toString()}

    setRecords([...records,newRecord ]);

    setUserRegistration({})


  }
    
  return (
    <>
    <div className='container'>
    <form action='' onSubmit={handleSubmit}>
        <div>
            <label className="name" htmlFor='name' value={userRegistration.name}>Name  </label>
            <input onChange={handleInput} type="text" name="name" className="name" required></input>

            <label className="email" htmlFor='email' value={userRegistration.email}>Email</label>
            <input  onChange={handleInput} type="email" name="email" className="email" required></input>

            <label className='number' htmlFor='name' value={userRegistration.number}>Contact Number</label>
            <input onChange={handleInput} type="number" name="number" className='number' required></input>


            <label className="courses" htmlFor='courses' value={userRegistration.courses}>Course</label>
            <select onChange={handleInput} className="courses" name="courses" required>
            <option value="UG">UG</option>
            <option value="PG">PG</option>

            </select>

            <label className="country" for="country" value={userRegistration.country}>Country</label>
            <select onChange={handleInput} className="country" name="country" multiple required>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="New-Zealand">New-Zealand</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Ireland">Ireland</option>
            <option value="Germany">Germany</option>
            </select>


            <label className="birthday" for="birthday" value={userRegistration.birthday}>Date of Birth</label>
            <input onChange={handleInput} type="date" className="birthday" name="birthday"></input>

            <button onClick={handleInput} className='button' type="submit" form="form" value="Submit">Registration</button>
            </div>
    </form>

    </div>

    <div>
        {
            records.map((curElem)=>{
                return (
                    <div className='showDataStyle'>
                        <p>{curElem.name}</p>
                        <p>{curElem.email}</p>
                        <p>{curElem.number}</p>
                        <p>{curElem.course}</p>
                        <p>{curElem.country}</p>
                        <p>{curElem.birthday}</p>
                    </div>
                )
            })
        }
    </div>
    </>
  );
}

export default Inputs