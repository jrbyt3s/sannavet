'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Veterinarios = () => {
    const [veterinarios, setVeterinarios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://sannavet-api.onrender.com/users/');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const responseData = await response.json();
                // Filtrar los usuarios cuyo campo "role" sea "veterinario"
                const veterinariosData = responseData.results.filter(user => user.role.toLowerCase() === 'veterinario');
                setVeterinarios(veterinariosData);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="md:flex block items-center justify-between my-[1.5rem] page-header-breadcrumb">
                <div>
                    <p className="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 ">Bienvenido amigo !</p>
                    <p className="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem]">Listado de veterinarios.</p>
                </div>
                <div className="mt-2 btn-list md:mt-0">
                    <button type="button"
                        className="ti-btn bg-primary text-white btn-wave !font-medium !me-[0.375rem] !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] mb-0 shadow-none">
                        <i className="inline-block ri-filter-3-fill"></i>Filters
                    </button>
                    <button type="button"
                        className="ti-btn ti-btn-outline-secondary btn-wave !font-medium  !me-[0.375rem]  !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] mb-0 shadow-none">
                        <i className="inline-block ri-upload-cloud-line"></i>Export
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 xxl:col-span-9 xl:col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 xxl:col-span-12 xl:col-span-12">
                            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="justify-between box-header">
                                    <div className="my-2 box-title">
                                        -------
                                    </div>
                                    <div className="flex flex-wrap gap-2 my-4">
                                        <div>
                                            <input className="p-1 my-2 rounded-lg ti-form-control form-control-sm bg-slate-200 " type="text" placeholder="Search Here"
                                                aria-label=".form-control-sm example" />
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="overflow-x-auto">
                                        <table className="table min-w-full border whitespace-nowrap table-hover table-bordered">
                                            <thead>
                                                <tr className="border border-solid border-inherit dark:border-defaultborder/10">
                                                    <th scope="row" className="!ps-4 !pe-5"><input className="form-check-input" type="checkbox"
                                                        id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                                    <th scope="col" className="!text-start !text-[0.85rem] min-w-[200px]">Nombre</th>
                                                    <th scope="col" className="!text-start !text-[0.85rem]">Categoria</th>
                                                    <th scope="col" className="!text-start !text-[0.85rem]">Correo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {veterinarios.map((veterinario) => (
                                                    <tr key={veterinario.id} className="border border-solid border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                        <td className="!ps-4 !pe-5"><input className="form-check-input" type="checkbox" defaultChecked={veterinario.checked === 'defaultChecked'}
                                                            id="" value="" aria-label="..." /></td>
                                                        <td>
                                                            <div className="flex items-center font-semibold">
                                                                <span className="!me-2 inline-flex justify-center items-center">
                                                                    <img src="https://w1.pngwing.com/pngs/443/869/png-transparent-dog-and-cat-veterinarian-veterinary-medicine-physician-paraveterinary-worker-easyvetclinic-veterinarian-hendersonville-tn-athens-veterinary-service-veterinary-education-thumbnail.png" alt="img" className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                                                                </span>{veterinario.first_name} {veterinario.last_name}
                                                            </div>
                                                        </td>
                                                        <td>{veterinario.role}</td>
                                                        <td>{veterinario.email}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="flex-auto">
                                    <div className="items-center sm:flex">
                                        <div className="ms-auto">
                                            <nav aria-label="Page navigation" className="pagination-style-4">
                                                <ul className="m-4 flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-2">
                                                    <li className="page-item disabled">
                                                        <Link className="page-link" href="#!">Prev</Link>
                                                    </li>
                                                    <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                                                    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                                    <li className="page-item">
                                                        <Link className="page-link !text-primary" href="#!">Next</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Veterinarios;
