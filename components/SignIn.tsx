"use client"

import React from 'react'
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { useRouter } from 'next/router';


const createSugestionFormSchema = z.object({
    name: z.string().nonempty('Por favor digite seu nome'),
    email: z.string().nonempty('O email é obrigatorio').email('Formato do email não é valido'),
    password: z.string().nonempty('senha obrigatoria').min(6, 'A senha deve ter no minimo 6 digitos')
})

type createSugestionFormData = z.infer<typeof createSugestionFormSchema>

const SignIn = () => {
    const [ output, setOutput] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm<createSugestionFormData>({
        resolver: zodResolver(createSugestionFormSchema)
    })

    function createSugestion(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    const [emailValue, setEmailValue] = useState<string>('');
    const [nameValue, setNameValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value)
    }

    const showSuccessMessage = () => {
        setMessage('Operação realizada com sucesso!');
    
        setTimeout(() => {
          setMessage('');
        }, 9000); // Oculta a mensagem após 3 segundos
      };


      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Impede a navegação padrão do link
    
        setTimeout(() => {
          window.location.href = '/'; // Navega para a página especificada após 2 segundos
        }, 7000);
      };


  return (

    <div className="flex flex-col items-center">
        <h1 className="mt-36 text-3xl font-extrabold">Login</h1>
        <form onSubmit={handleSubmit(createSugestion)} className="flex flex-col mt-16 
        items-center border-solid border-4 w-3/12 bg-blue-100 rounded-xl">
            
            <label className="text-xl font-semibold mt-8">Digite seu nome:</label>

            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700 p-2 rounded-xl" type="text"
             placeholder="Digite seu nome"
              {...register('name')}
             value={nameValue}
             onChange={handleNameChange} />
             {errors.name && <span>{errors.name.message}</span>}
            

            <label className="text-xl font-semibold mt-8">Digite seu email:</label>

            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700 p-2 rounded-xl" 
             type="text" 
             placeholder="exemplo@email.com"
             {...register('email')}
             value={emailValue}
             onChange={handleEmailChange} />
             {errors.email && <span>{errors.email.message}</span>}

            <label className="text-xl font-semibold mt-8">Digite sua senha:</label>
            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700 p-2 rounded-xl" 
             type="password" 
             placeholder="*******"
             {...register('password')}
             value={passwordValue}
             onChange={handlePasswordChange} />
             {errors.password && <span>{errors.password.message}</span>}

             <label className="text-xl font-semibold mt-8">selecione</label>
             <div className='flex gap-1'>
                
                <label className='mr-4'>
                    Cliente
                    <input type='radio' 
                        id='client' 
                        value="client" />
                </label>
                
                <label>
                    Admnistrador
                    <input name='option' type='radio' id='adm' value="adm" />
                </label>
             </div>
            <button type="submit" onClick={showSuccessMessage} className="w-44 h-10 mt-10 bg-blue-800 hover:bg-blue-600
            font-semibold text-xl text-white rounded-full mb-8"><Link href="/" onClick={handleClick}>Enviar</Link></button>
            {message && <div className="notification">{message}</div>}

        </form>
    </div>
  )
}

export default SignIn
