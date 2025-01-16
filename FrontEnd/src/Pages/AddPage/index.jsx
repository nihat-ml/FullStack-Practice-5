import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "./style.module.css"
import { Helmet } from 'react-helmet';

 

  
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
                alert("Mehsulunuz elave edildi")
                navigate("/")
            })
        }
        },
      )
  return (
    
    <>
    <Helmet>
        <title>Add Page</title>
    </Helmet>
    <form onSubmit={formik.handleSubmit}>
         <label htmlFor="image">Image</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.image}
       />
       {formik.touched.image && formik.errors.image ? (
         <div>{formik.errors.image}</div>
       ) : null}
       <label htmlFor="title">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
       />
       {formik.touched.title && formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}
 
       <label htmlFor="description">Description</label>
       <input
         id="description"
         name="description"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.description}
       />
       {formik.touched.description && formik.errors.description ? (
         <div>{formik.errors.description}</div>
       ) : null}
 
       <label htmlFor="price">Price</label>
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.price}
       />
       {formik.touched.price && formik.errors.price ? (
         <div>{formik.errors.price}</div>
       ) : null}
 
       <button type="submit">Submit</button>
     </form>
    </>
    
    
   );
  
}

export default AddPage
