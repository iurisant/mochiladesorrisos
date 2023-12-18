import React from 'react'
import Logo from "../assets/logo.svg"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
  const [showPass, setShowPass] = React.useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  async function handleSingIn(v) {
    signInWithEmailAndPassword(auth, v.email, v.password)
      .then((user) => {
        toast.success("Logado com sucesso!")
        navigate('/admin')
      }).catch((e) => {
        console.log(e)
        toast.error("Email ou senha incorreta!")
      })
  }

  async function handleResetPassword() {
    sendPasswordResetEmail(auth, "mochiladesorriso@gmail.com")
      .then((user) => {
        toast.success('Um e-mail de redefinição de senha foi enviado para o seu endereço de e-mail.')
      }).catch((e) => {
        console.log(e)
        toast.error(`Erro ao enviar e-mail de redefinição de senha`)
      })
  }

  const FormSchema = Yup.object().shape({
    email: Yup.string()
      .required('Campo Obrigatório!'),
    password: Yup.string()
      .min(8, 'Senha muito curta!')
      .required('Campo Obrigatório!'),
  });

  return (
    <section className='relative overflow-hidden w-[100vw] h-[100vh] bg-sky-200 flex flex-col gap-8 items-center justify-center'>
      <h1 className='relative z-30 text-3xl font-bold'>Login Dashboard</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          handleSingIn(values)
        }}
      >
        {({ errors, touched }) => (
          <Form className='relative z-30 flex flex-col max-w-[1024px] w-full bg-white rounded-2xl p-16 shadow-lg'>
            <label htmlFor="email">Email</label>
            <Field className='border-[1px] p-2 border-zinc-400 rounded'
              type="email" name="email" id="email" />
            {errors.email && touched.email ? (
              <div className='text-red-500 text-xs font-bold'>{errors.email}</div>
            ) : null}
            <label className="mt-4" htmlFor="Senha">Senha</label>
            <div className='relative'>
              <Field className='w-full border-[1px] p-2 border-zinc-400 rounded'
                type={showPass ? "text" : "password"} name="password" id="password" />
              <span className="absolute z-50 top-[9px] right-4" onClick={() => { setShowPass(!showPass) }}>
                {showPass ? (<FaEye size={24} />) : (<FaEyeSlash size={24} />)}
              </span>
            </div>
            {errors.password && touched.password ? (
              <div className='text-red-500 text-xs font-bold'>{errors.password}</div>
            ) : null}
            <br />
            <button className='bg-sky-600 text-white text-2xl font-bold rounded py-2 mt-4'
              type="submit">Login</button>
            <p className='mt-4 relative z-30 hover:cursor-pointer'
              onClick={() => { handleResetPassword() }
              }>Esqueceu a senha?</p>
          </Form>
        )}
      </Formik>
      <img className="absolute opacity-20 z-10 h-[150vh] max-h-[100%] max-w-none" src={Logo} alt="Mochila de sorriso" />
    </section>
  )
}