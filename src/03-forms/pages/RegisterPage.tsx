import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'

import '../styles/styles.css'


export const RegisterPage = () => {

    const { 
        onChange, resetForm, isValidEmail, formData, name, email, password, password2 
    } = useForm({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log( formData )
    }

    return (
        <div>
            <h1> Register Page </h1>

            <form noValidate onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="name" 
                    name='name'
                    value={name}
                    onChange={ onChange }
                    className={ `${ name.trim().length <= 0 && 'has-error' }`}
                />
                { name.trim().length <= 0 && <span>Este campo es obligatorio</span> } 

                <input 
                    type="email"
                    placeholder="email"
                    name='email' 
                    value={email}
                    onChange={ onChange }
                    className={ `${ !isValidEmail( email ) && 'has-error' }`}
                />
                { !isValidEmail( email ) && <span>Email no valido</span> } 

                <input 
                    type="password"
                    placeholder="password" 
                    name='password'
                    value={password}
                    onChange={ onChange }
                />
                { password.trim().length <= 0 && <span>Este campo es obligatorio</span> } 
                { password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña debe de tener 6 caracteres</span> } 

                <input 
                    type="password"
                    placeholder="repeat password"
                    name='password2'
                    value={password2} 
                    onChange={ onChange }
                />
                { password2.trim().length <= 0 && <span>Este campo es obligatorio</span> } 
                { password2.trim().length > 0 && password2 !== password && <span>Las contraseñas deben ser iguales</span> } 

                <button type="submit">Create</button>
                <button type="button" onClick={ resetForm }>Reset</button>

            </form>
        </div>
    )
}
