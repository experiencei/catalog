// import React , { useState  } from "react";
// import { STUDENTS } from "./StudentsList"
// import ResidentsList from './ResidentsList';
// import Error from "./Error";


// function checkValidity(joiningDate, validityDate) {
// 	const now = new Date();
// 	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// 	const [year, month, day] = joiningDate.split('-');
// 	const [yyyy, mm, dd] = validityDate.split('-');
// 	const maxValid = new Date(yyyy, mm - 1, dd);
// 	const selected = new Date(year, month - 1, day);
// 	return (maxValid >= selected) && (maxValid >= today);
// }

// const studenties = STUDENTS;


// const checkName = (inputName , date) => {
//    let solidName = [];
//    studenties.map((item) =>solidName.push(item.name.toLowerCase()));
//    const rValue = solidName.findIndex((elm)=> elm === inputName.toLowerCase())
//    console.log(rValue);
//    if(rValue < 0 || rValue > 7) {
// 	  return 
//    } 
//    return checkValidity(date , studenties[rValue].validityDate) ? true : rValue;
//  } 




// function Search() {
//   const [name , setName] = useState('') 
//   const [date , setDate] = useState('')
//   const [students, setStudents] = useState([]);
//   const [error , setError] = useState(false);
//   const [valError , setValError] = useState(null)
//   const [realErr , setRealErr] = useState(null)

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleDate = (e) => {
// 	  setDate(e.target.value);
//   }

// //   useEffect(()=> {
// // 	const checkErrors = () => {
// // 		let ErrName = [];
// // 		studenties.map(({name , validityDate}) => ErrName.push(name.toLowerCase()))
// // 			 if(ErrName.includes(valError)) {
// // 				setRealErr(`Sorry , ${valError}'s validity has Expired!`)
// // 			 }  else {
// // 				setRealErr(`Sorry, ${valError} is not a verified student!`)
// // 			 }
// // 		} 
// // 		checkErrors()
// //   }, [error , valError]);


// const AddTask = () => {
//     if (name !== "" && date !== '') {
// 	  const results = checkName(name , date);

// 	    if( results === undefined ) {
// 			setRealErr(`Sorry, ${name} is not a verified student!`)
// 			setError(true)
// 			setName('')
// 			setDate('')
// 			return
// 		}  else if(Number.isInteger(results)) {
// 			const realName = studenties[results].name
// 			setError(true)
// 			setName('')
// 			setDate('')
// 			setValError(realName)
// 			return
// 		}
// 		else {
// 			setError(false)
// 			const studentDetails = {
// 					id: Math.floor(Math.random() * 1000),
// 					value: name,
// 				  };
				
// 				  setStudents([...students, studentDetails]);
// 			setName('')
// 			setDate('')
// 		}
// 	}
//   };

  
      

// 	return (
// 		<div className="my-50 layout-row align-items-end justify-content-end">
// 			<label htmlFor="studentName">Student Name:
// 				<div>
// 					<input id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" value={name} onChange={(e) => handleChange(e)}/>
// 				</div>
// 			</label>
// 			<label htmlFor="joiningDate">Joining Date:
// 				<div>
// 					<input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" value={date} onChange={(e) => handleDate(e)}/>
// 				</div>
// 			</label>
// 			<button type="button" data-testid="addBtn" className="small mb-0" onClick={AddTask}>Add</button>
// 			{error && <Error valueError={valError} real={realErr}/>}
// 			<ResidentsList students={students} />
// 		</div>
// 	);
// }

// export default Search;

import React , {useState , useEffect} from 'react';
import Error from '../Components/Error';
import ResidentsList from '../Components/ResidentsList';
import { STUDENTS } from '../studentsList'
// `joiningDate` && `validityDate` format "yyyy-mm-dd"

const studenties = STUDENTS;


const checkName = (inputName , date) => {
   let solidName = [];
   studenties.map((item) =>solidName.push(item.name.toLowerCase()));
   const rValue = solidName.findIndex((elm)=> elm === inputName.toLowerCase())
   console.log(rValue);
   if(rValue < 0 || rValue > 7) {
	  return 
   } 
   return checkValidity(date , studenties[rValue].validityDate) ? true : rValue;
 } 


function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search() {
  const [name , setName] = useState('') 
  const [date , setDate] = useState('')
  const [students, setStudents] = useState([]);
  const [error , setError] = useState(false);
  const [valError , setValError] = useState(null);
  const [realErr , setRealErr] = useState(null)


  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleDate = (e) => {
	  setDate(e.target.value);
  }


const AddTask = () => {
    if (name !== "" && date !== '') {
	  const results = checkName(name , date);

	    if( results === undefined ) {
      setError(true)
			setRealErr(`Sorry, ${name} is not a verified student!`)
			setName('')
			setDate('')
			return
		}  else if(Number.isInteger(results)) {
      const realName = studenties[results].name
			setError(true)
			setName('')
			setDate('')
			setValError(realName)
			return
		}
		else {
			setError(false)
			const studentDetails = {
					id: Math.floor(Math.random() * 1000),
					value: name,
				  };
				
				  setStudents([...students, studentDetails]);
			setName('')
			setDate('')
		}
	}
  };

  
      

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" value={name} onChange={(e) => handleChange(e)}/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" value={date} onChange={(e) => handleDate(e)}/>
				</div>
			</label>
			<button type="button" data-testid="addBtn" className="small mb-0" onClick={AddTask}>Add</button>
			{error && <Error valueError={valError} real={realErr}/>}
			<ResidentsList students={students} />
		</div>
	);
}

export default Search;
