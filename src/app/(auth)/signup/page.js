"use client"
import Link from 'next/link';
import React, { Fragment, useState } from 'react'


const Signupbasic = () => {

    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
    const divStyle = {
        backgroundImage: 'url("https://s3-alpha.figma.com/hub/file/3708502632/466e4267-079d-4631-9784-521838876418-cover.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

  return (
    <Fragment>
         <div className="flex justify-center items-center h-screen" style= {divStyle}>
         <div className="bg-white bg-opacity-70 p-6 rounded-md sm:w-96">
                            <p className="h5 font-semibold mb-2 text-center">Crea tu cuenta</p>
                            <p className="mb-4 text-[#2f3031] dark:text-black/50 opacity-[0.7] font-normal text-center">Bienvenido, crea una cuenta aqui!</p>
                            <div className="grid grid-cols-12 gap-y-4">
                            <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-firstname" className="form-label text-default">Nombre de Usuario</label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-username" placeholder="nombre de usuario"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-firstname" className="form-label text-default">Email</label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-email" placeholder="email"/>
                                </div>
                                
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-firstname" className="form-label text-default">Nombres</label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-firstname" placeholder="nombres"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-lastname" className="form-label text-default">Apellidos</label>
                                    <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                        id="signup-lastname" placeholder="apellidos"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
    <label htmlFor="signup-rol" className="form-label text-default">Rol</label>
    <select id="signup-rol" className="form-control form-control-lg w-full !rounded-md">
        <option value="opcion1">cliente</option>
        <option value="opcion2">veterinario</option>
    </select>
</div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-password" className="form-label text-default">Contraseña</label>
                                    <div className="input-group">
                                        <input type={(passwordshow1) ? 'text' : "password"}
                                            className="form-control form-control-lg !rounded-e-none"
                                            id="signup-password" placeholder="contraseña"/>
                                        <button onClick={()=>setpasswordshow1(!passwordshow1)} aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                                           
                                            id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12 mb-2">
                                    <label htmlFor="signup-confirmpassword" className="form-label text-default">Confirmar
                                         Contraseña</label>
                                    <div className="input-group">
                                        <input type={(passwordshow2) ? 'text' : "password"}
                                            className="form-control form-control-lg !rounded-e-none"
                                            id="signup-confirmpassword" placeholder="confirmar
                                            contraseña"/>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                                           onClick={()=>setpasswordshow2(!passwordshow2)}
                                            id="button-addon21"><i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                                    </div>
                                    <div className="mt-4">
                                        <div className="form-check !flex !ps-0">
                                            <input className="form-check-input me-1" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="ps-2 form-check-label text-[#8c9097] dark:text-black/50 font-normal block" htmlFor="defaultCheck1">
                                                Para crear una cuenta debes aceptar nuestros <Link href="/src/app/(auth)/terms/page.js"
                                                className="text-success"><u>Terminos &amp; Condiciones</u></Link> y <Link href="#!"
                                                className="text-success"><u>Poliza de Privacidad</u></Link>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12 grid mt-2">
                                    <button type="button" className="bg-orange-500 w-full text-white py-2 rounded-md hover:bg-blue-500 transition">Crear Cuenta</button>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-[0.95rem] text-[#8c9097] dark:text-black/50 mt-4">Ya tienes una cuenta? <Link
                                        href="/signin" className="text-primary">ingresa aqui</Link></p>
                            </div>
                            <div className="text-center my-4 authentication-barrier">           
                            </div>                          
                        </div>
    </div>
    </Fragment>
  )
}

Signupbasic.layout = "Authenticationlayout"

export default Signupbasic