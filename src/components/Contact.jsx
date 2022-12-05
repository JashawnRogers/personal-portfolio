import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Card, Elevation, Button } from "@blueprintjs/core"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js'
import * as yup from 'yup'


const Contact = () => {
    const form = useRef();  
  
    const schema = yup.object().shape({
        user_name: yup.string().required("Please enter Valid Name"),
        user_email: yup.string().email().required("Please enter valid email address"),
        message: yup.string().required("Forgetting something?")
    })

    const { register, handleSubmit, reset,  formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = () => {
        emailjs
        .sendForm('service_wqa7w2c', 'template_4wl9rch', form.current, 'bBlrV_vhDZTUUQBSm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
            }
          );
        reset();
    } 




  return (
    <section className='h-screen w-full flex justify-center items-center' style={{fontFamily: 'Staatliches'}}>
        
        <Card elevation={Elevation.TWO} className="md:min-w-[40rem] md:min-h-[20rem] rounded-2xl">
            <div className="">
                <h2 className='text-center text-3xl text-black pb-6'>Let's work!</h2>
            </div>

            <form ref={form} onSubmit={handleSubmit(onSubmit)} className=" flex flex-col justify-center items-start text-black">
                <label className=''>Name</label>
                <input type="text" className='w-full h-10 border-b-2 py-4 border-solid border-black' {...register("user_name")}/>
                {errors.user_name && <p className='py-3 text-red-600 text-md'>{errors.user_name?.message}</p>}                <label className='pt-4 text-black' placeholder='Email' >Email</label>
                <input type="email"  className='w-full h-10 border-b-2 py-4 border-solid border-black' {...register("user_email")}/>
                {errors.email && <p className='py-3 text-red-600 text-md'>{errors.user_email?.message}</p>}
                <label className='pt-4'>Message</label>
                <textarea className='w-full py-4 border-b-2 border-solid border-black rounded-md' {...register("message")}/>
                {errors.message && <p className='py-3 text-red-600 text-md'>{errors.message?.message}</p>}
                <Button 
                    type='submit'
                    className="p-3 mt-6"
                >
                   Send
                </Button>
            </form>
        </Card>
        
    </section>
  )
}

export default Contact