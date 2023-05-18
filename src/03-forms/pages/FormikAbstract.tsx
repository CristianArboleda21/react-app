import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyTextInput, MySelect, MyCheckbox } from '../components';
import '../styles/styles.css';

export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstract</h1>

            <Formik 
                initialValues={{
                    firstName:'',
                    lastName:'',
                    email:'',
                    terms: false,
                    jobType:''
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={ Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
        
                    lastName: Yup.string()
                                    .max(10, 'Debe de tener 10 caracteres o menos')
                                    .required('Requerido'),
        
                    email: Yup.string()
                                .email('Formato invalido')
                                .required('Requerido'),
                    
                    terms: Yup.boolean()
                                .oneOf([true], 'Debe de aceptar las condiciones'),

                    jobType: Yup.string()
                                    .required('Requerido')
                                    .notOneOf(['it-jr'], 'Esta opcion no es permitida')

                }) }
            >

              {
                (formik) => (
                    <Form>

                        <MyTextInput label='First Name' name='firstName'/>

                        <MyTextInput label='Last Name' name='lastName'/>
                        
                        <MyTextInput label='Email' name='email' type='email'/>

                        <MySelect label='Job Type' name='jobType' as='select'>
                            <option value=''>Pick something</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>IT senior</option>
                            <option value='it-jr'>IT jr</option>
                        </MySelect>

                        <MyCheckbox label='Terms and conditions' name='terms'/>                                         
               
                        <button type='submit'>Send</button>
                    </Form>
                )
              }  

            </Formik>

           
        </div>
    )
}
