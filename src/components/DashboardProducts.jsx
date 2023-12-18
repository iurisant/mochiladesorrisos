import React from 'react';
import { doc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import db from "../firebase";
import { FaTrash, FaEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Formik, Form, Field } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Nome muito curto!')
    .max(32, 'Nome muito longo!')
    .required(''),
  url: Yup.string()
    .min(16, 'Link muito curto!')
    .max(32, 'Link muito longo!')
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Link Inválido'
    )
    .required(''),
  description: Yup.string()
    .min(16, 'Descrição muito curta!')
    .max(256, 'Descrição muito longa!')
});

export default function DashboardProducts({ data }) {
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [showEditForm, setShowEditForm] = React.useState(false);
  const [id, setId] = React.useState();
  const [url, setUrl] = React.useState();
  const [name, setName] = React.useState();
  const [desc, setDesc] = React.useState();

  const setLivros = async (url, name, description) => {
    try {
      await setDoc(doc(db, "produtos", uuidv4()), {
        name: name,
        url: url,
        description: description
      });
    } catch (e) {
      console.error(e)
    }
  }

  const updateLivros = async (id, url, name, description) => {
    try {
      await updateDoc(doc(db, "produtos", id), {
        name: name,
        url: url,
        description: description
      });
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <section className='w-full max-w-[1280px] px-8 py-16'>
      <div className='flex items-center gap-3'>
        <h1 className=' text-2xl my-2'>Produtos Gráfica</h1>
        <div className="quest flex items-center gap-3">
          <span className='bg-sky-600 font-bold text-white text-xs rounded-full py-[3px] px-[9px] hover:cursor-pointer'>?</span>
          <p className='hidden' id='quest'>Para gerar um link para sua imagem utilize o <a className="font-bold text-sky-600 underline" href="https://imgur.com/" target='_blank' rel="noreferrer">Imgur</a>.</p>
        </div>
      </div>
      <div className='w-full bg-white border-slate-300 rounded border-[1px] px-2 flex flex-col items-center justify-center [&>*:nth-child(even)]:border-y-[1px] '>
        {data.map((v, k) => (
          <div key={k} className='flex items-center justify-between gap-10 p-4 w-full'>
            <div className='flex gap-8 items-center'>
              <img className=" w-20 h-20" src={v.url && v.url.includes("https://imgur.com") ?
                v.url.replace("https://imgur.com", "https://i.imgur.com").concat(".png") : v.url} alt={v.name} />
              <div className='ms:flex gap-1 flex-col justify-center hidden'>
                <p className='font-bold'>{v.name}</p>
                <p className='text-xs line-clamp-2 '>{v.description}</p>
              </div>
            </div>
            < div className='flex gap-4' >
              <button className=' bg-sky-600 hover:bg-sky-800 p-2 rounded'><FaEdit color='white' onClick={() => {
                setId(v.id);
                setName(v.name);
                setUrl(v.url);
                setDesc(v.description);
                setShowEditForm(!showEditForm)
              }}
              /></button>
              <button className=' bg-red-600 hover:bg-red-800 p-2 rounded'><FaTrash color='white' onClick={async () => {
                await deleteDoc(doc(db, "produtos", v.id));
              }} /></button>
            </div>
          </div>
        ))
        }
      </div >
      <button className='bg-green-600 hover:bg-green-800 text-white w-full p-2 mt-4 rounded font-bold'
        onClick={() => { setShowAddForm(!showAddForm) }}>
        Adicionar
      </button>
      {showAddForm && (
        <div className='flex items-center py-32 justify-center fixed z-[200] top-0 left-0 w-[100vw] h-[100vh] bg-[#000000a2] p-8'>
          <div className='bg-white w-full max-w-[1280px] rounded flex flex-col py-32 px-12 shadow-2xl relative'>
            <Formik
              initialValues={{
                name: '',
                url: '',
                description: ''
              }}
              validationSchema={FormSchema}
              onSubmit={async (values) => {
                setShowAddForm(!showAddForm)
                setLivros(values.url, values.name, values.description)
              }}
            >
              {({ errors, touched }) => (
                <Form className='flex flex-col'>
                  <label htmlFor="name"><strong>Nome do livro:</strong></label>
                  <Field id="name" name="name" placeholder="Livro 00" className='border-[1px] p-2 border-zinc-400 rounded' />
                  {errors.name && touched.name ? (
                    <div className='text-red-500 text-xs font-bold'>{errors.name}</div>
                  ) : null}
                  <label className='mt-4' htmlFor="description"><strong>Descrição do livro:</strong></label>
                  <Field id="description" name="description" placeholder="Descrição" className='border-[1px] p-2 border-zinc-400 rounded' />
                  {errors.description && touched.description ? (
                    <div className='text-red-500 text-xs font-bold'>{errors.description}</div>
                  ) : null}
                  <label className='mt-4' htmlFor="url"><strong>Link da Imagem: <strong className='text-red-600'>Recomendação(512x512px)</strong></strong></label>
                  <Field id="url" name="url" placeholder="https://i.imgur.com/" className='border-[1px] p-2 border-zinc-400 rounded' />
                  {errors.url && touched.url ? (
                    <div className='text-red-500 text-xs font-bold'>{errors.url}</div>
                  ) : null}
                  <button className='bg-sky-600 hover:bg-sky-800 text-white w-full p-2 mt-4 rounded font-bold' type="submit">Adicionar</button>
                </Form>
              )}
            </Formik>
            <button onClick={() => {
              setShowAddForm(!showAddForm)
            }}><IoCloseSharp size={24} className='absolute top-4 right-4' /></button>
          </div>
        </div>
      )}
      {showEditForm && (
        <div className='flex items-center py-32 justify-center fixed z-[200] top-0 left-0 w-[100vw] h-[100vh] bg-[#000000a2] p-8'>
          <div className='bg-white w-full max-w-[1280px] rounded flex flex-col py-32 px-12 shadow-2xl relative'>
            <Formik
              initialValues={{
                name: name,
                url: url,
                description: desc
              }}
              validationSchema={FormSchema}
              onSubmit={async (values) => {
                setShowEditForm(!showEditForm)
                updateLivros(id, values.url, values.name, values.description)
              }}
            >
              {({ errors, touched }) => (
                <Form className='flex flex-col'>
                  <label htmlFor="name"><strong>Nome do livro:</strong></label>
                  <Field id="name" name="name" placeholder="Livro 00" className='border-[1px] p-2 border-zinc-400 rounded' />
                  {errors.name && touched.name ? (
                    <div className='text-red-500 text-xs font-bold'>{errors.name}</div>
                  ) : null}
                  <label className='mt-4' htmlFor="description"><strong>Descrição do livro:</strong></label>
                  <Field id="description" name="description" placeholder="Descrição" className='border-[1px] p-2 border-zinc-400 rounded' />
                  {errors.description && touched.description ? (
                    <div className='text-red-500 text-xs font-bold'>{errors.description}</div>
                  ) : null}
                  <label className='mt-4' htmlFor="url"><strong>Link da Imagem: <strong className='text-red-600'>Recomendação(512x512px)</strong></strong></label>
                  <Field id="url" name="url" placeholder="https://i.imgur.com/" className='border-[1px] p-2 border-zinc-400 rounded' />
                  {errors.url && touched.url ? (
                    <div className='text-red-500 text-xs font-bold'>{errors.url}</div>
                  ) : null}
                  <button className='bg-sky-600 hover:bg-sky-800 text-white w-full p-2 mt-4 rounded font-bold' type="submit">Atualizar</button>
                </Form>
              )}
            </Formik>
            <button onClick={() => {
              setShowEditForm(!showEditForm)
            }}><IoCloseSharp size={24} className='absolute top-4 right-4' /></button>
          </div>
        </div>
      )}
    </section >
  )
}