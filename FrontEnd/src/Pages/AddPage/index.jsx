import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { response } from 'express';
import { Navigate, useNavigate } from 'react-router-dom';
 

  
function AddPage() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          image:'',  
          title: '',
          description: '',
          price: '',
        },
        validationSchema: Yup.object({
            image: Yup.string()
            .required('Required'),
          title: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          description: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          price: Yup.number().required('Required'),
        }),
        onSubmit: (values)=>{
            axios.post("http://localhost:3000/features", values)
            .then((response)=>{
                navigate("/")
            })
        }
        },
      )
  return (
    
    
    <form onSubmit={formik.handleSubmit}>
         <label htmlFor="image">First Name</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
       <label htmlFor="title">First Name</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
 
       <label htmlFor="description">Last Name</label>
       <input
         id="description"
         name="description"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
 
       <label htmlFor="price">Email Address</label>
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 
       <button type="submit">Submit</button>
     </form>
   );
  
}

export default AddPage
