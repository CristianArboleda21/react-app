import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'
import { MyTextInput } from '../components';



export const RegisterFormikPage = () => {

    // const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    //     e.preventDefault();
    //     console.log( formData )
    // }

    return (
        <div>
            
            <h1> Register Formik Page </h1>

            <Formik
                initialValues = {{
                    name:'',
                    email:'',
                    password:'',
                    password2:''
                }}

                onSubmit = {( values ) => {
                    console.log(values)
                }}

                validationSchema = { Yup.object({
                    name: Yup.string()
                                .required('Requerido')
                                .max(15, 'Debe de tener menos de 15 caracteres')
                                .min(2, 'Debe de tener mas de 2 caracteres'),
        
                    email: Yup.string()
                                .required('Requerido')
                                .email('Formato invalido'),
        
                    password: Yup.string()
                                    .required('Requerido')
                                    .min(6, 'La contraseña debe de tener mas 6 de caracteres'),
                    
                    password2: Yup.string()                        
                                    .required('Requerido')
                                    .oneOf([ Yup.ref('password') ], 'Las contraseñas deben ser iguales')
        
                }) }
            >
                {
                    formik => (
                        <Form>

                            {/* <label htmlFor="name">Name</label>
                            <Field name='name' type='text' />
                            <ErrorMessage name='name' component='span'/>

                            <label htmlFor="email">Email</label>
                            <Field name='email' type='text' />
                            <ErrorMessage name='email' component='span'/>

                            <label htmlFor="password">Password</label>
                            <Field name='password' type='text' />
                            <ErrorMessage name='password' component='span'/>

                            <label htmlFor="password2">Repeat Password</label>
                            <Field name='password2' type='text' />
                            <ErrorMessage name='password2' component='span'/> */}

                            <MyTextInput label='Name' name='name' placeholder='Cristian' type='text'/>

                            <MyTextInput label='Email' name='email' placeholder='Cristian@google.com' type='email'/>

                            <MyTextInput label='Password' name='password' placeholder='******' type='password'/>
                            <MyTextInput label='Repeat Password' name='password2' placeholder='******' type='password'/>


                            <button type="submit">Create</button>
                            <button type="button" onClick={ formik.handleReset }>Reset</button>
                        </Form>
                    )
                }
            </Formik>

            {/* <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    placeholder="name" 
                    { ...getFieldProps('name') }
                />
                { touched.name && errors.name && <span>{ errors.name }</span> } 

                <input 
                    type="email"
                    placeholder="email"
                    { ...getFieldProps('email') }
                />
                { touched.email && errors.email && <span>{ errors.email }</span> }

                 <input 
                    type="password"
                    placeholder="password"
                    { ...getFieldProps('password') }
                />
                { touched.password && errors.password && <span>{ errors.password }</span> }  

                <input 
                    type="password"
                    placeholder="repeat password"
                    { ...getFieldProps('password2') }
                />
                { touched.password2 && errors.password2 && <span>{ errors.password2 }</span> }  
                { password2.trim().length > 0 && password2 !== password && <span>Las contraseñas deben ser iguales</span> }  

                <button type="submit">Create</button>
                <button type="button" onClick={ handleReset }>Reset</button>

            </form> */} 

        </div>
    )
}
