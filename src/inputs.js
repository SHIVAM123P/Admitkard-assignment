import React, {useState} from 'react'

const inputs = () => {
  return (
    <>
    <div className='container'>
    <form action=''>
        <div>
            <label className="name" htmlFor='name'>Name</label>
            <input onChange={handleInput} type="text" name="name" className="name"></input>

            <label className="email" htmlFor='email'>Email</label>
            <input  onChange={handleInput} type="email" name="email" className="email"></input>

            <label className='number' htmlFor='name'>Contact Number</label>
            <input onChange={handleInput} type="number" name="number" className='number'></input>


            <label className="courses" htmlFor='courses'>Course level</label>
            <select onChange={handleInput} className="courses" name="courses">
            <option value="UG">UG</option>
            <option value="PG">PG</option>

            </select>

            <label className="country" for="country">Choose a car:</label>
            <select onChange={handleInput} className="country" name="country" multiple>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="New-Zealand">New-Zealand</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Ireland">Ireland</option>
            <option value="Germany">Germany</option>
            </select>


            <label className="birthday" for="birthday">Date of Birth</label>
            <input onChange={handleInput} type="date" className="birthday" name="birthday"></input>

            <button className='button' type="submit" form="form1" value="Submit">Submit</button>
            </div>
    </form>

    </div>
    </>
  );
}

export default inputs