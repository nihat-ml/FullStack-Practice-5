import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "./style.module.css";
import { Helmet } from 'react-helmet';

function AddPage() {
    const navigate = useNavigate();
    const [features, setFeatures] = useState([]);

   
    useEffect(() => {
        axios.get("http://localhost:3000/features")
            .then((response) => {
                setFeatures(response.data);
            })
            .catch((error) => {
                console.error("Veri çekme hatası:", error);
            });
    }, []);

    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            description: '',
            price: '',
        },
        validationSchema: Yup.object({
            image: Yup.string().required('Required'),
            title: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            description: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            price: Yup.number().required('Required'),
        }),
        onSubmit: (values) => {
            axios.post("http://localhost:3000/features", values)
                .then((response) => {
                    alert("Mehsulunuz elave edildi");
                    setFeatures([...features, response.data]); 
                    formik.resetForm();
                })
                .catch((error) => {
                    console.error("Ekleme hatası:", error);
                });
        }
    });

   
    const handleDelete = (_id) => {
        axios.delete(`http://localhost:3000/features/${_id}`)
            .then(() => {
                setFeatures(features.filter((feature) => feature._id !== _id));
            })
            
    };

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
                {formik.touched.image && formik.errors.image && <div>{formik.errors.image}</div>}

                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title && <div>{formik.errors.title}</div>}

                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description && <div>{formik.errors.description}</div>}

                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price && <div>{formik.errors.price}</div>}

                <button type="submit">Submit</button>
            </form>

          
            <h2>Features List</h2>
            <table border="1" style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature) => (
                        <tr key={feature._id}>
                            <td><img src={feature.image} alt={feature.title} width="50" /></td>
                            <td>{feature.title}</td>
                            <td>{feature.description}</td>
                            <td>${feature.price}</td>
                            <td>
                                <button onClick={() => handleDelete(feature._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default AddPage;
