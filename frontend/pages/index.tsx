import React, { useState } from 'react';
import { FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import { POST_COMPANY } from '../graphql/index';
import Layout from '../components/Layout';
import { useForm } from '../hooks/userForm';
import { useAlert } from '../hooks/useAlert';
import { tpCompany, emptyComany } from '../interfaces/company';
import ScanQR from '../components/ScanQR';

export default function Home() {

    const { vhDataForm, ChangeListener, ChangeAll } = useForm<tpCompany>(emptyComany);
    const { vhAlert, BuildAlert, DelAlert } = useAlert(null);
    const [postCompany] = useMutation(POST_COMPANY);

    const SaveCompany = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const vlPostCompany = (
                await postCompany({
                    variables: { data: vhDataForm }
                })
            ).data.CreateCompany;

            if (vlPostCompany) {
                ChangeAll(emptyComany);
                BuildAlert({
                    type: 'success',
                    title: 'Saved Company information'
                });
            }
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
            BuildAlert({
                type: 'danger',
                title: 'Can not saved Company information'
            });
        }
    };

    return (
        <Layout>
            {vhAlert}

            <div className="d-flex justify-content-center">
                <h2>Add information /Agregar informacion</h2>
            </div>

            <form onSubmit={SaveCompany}>
                <div className="container">
                    <div className="row g-1">
                        <div className="col-4">{<ScanQR ChangeAll={ChangeAll} DelAlert={DelAlert}/>}
                        </div>

                        <div className="col-8">
                            <label>Company / Empresa</label>
                            <input
                                type="text"
                                className="form-control"
                                name="COMPANY"
                                required
                                value={vhDataForm.COMPANY}
                                onChange={(event) => {
                                    ChangeListener(event, 'string');
                                }}
                            />
                            <label>Name / Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                name="NAME"
                                required
                                onChange={(event) => {
                                    ChangeListener(event, 'string');
                                }}
                                value={vhDataForm.NAME}
                            />
                            <label>Jop / Puesto</label>
                            <input
                                type="text"
                                className="form-control"
                                name="JOB"
                                value={vhDataForm.JOB}
                                onChange={(event) => {
                                    ChangeListener(event, 'string');
                                }}
                            />
                        </div>
                        <div className="col-6">
                            <label>Email / Correo Electronico</label>
                            <input
                                type="text"
                                className="form-control"
                                name="EMAIL"
                                value={vhDataForm.EMAIL}
                                onChange={(event) => {
                                    ChangeListener(event, 'string');
                                }}
                            />
                        </div>
                        <div className="col-6">
                            <label>Phone / Telefono</label>
                            <input
                                type="string"
                                className="form-control"
                                name="PHONE"
                                value={vhDataForm.PHONE}
                                onChange={(event) => {
                                    ChangeListener(event, 'string');
                                }}
                            />
                        </div>
                        <div className="col-12">
                            <label>Address / Direccion</label>
                            <input
                                type="text"
                                className="form-control"
                                name="ADDRESS"
                                value={vhDataForm.ADDRESS}
                                onChange={(event) => {
                                    ChangeListener(event, 'string');
                                }}
                            />
                        </div>

                        <div className="col-4">
                            <label>Country / Pais</label>
                            <input
                                type="text"
                                className="form-control"
                                name="COUNTRY"
                                value={vhDataForm.COUNTRY}
                                onChange={(event) => {
                                    ChangeListener(event, 'string');
                                }}
                            />
                        </div>
                        <div className="col-4">
                            <label>State / Estado</label>
                            <input
                                type="text"
                                className="form-control"
                                name="STATE"
                                value={vhDataForm.STATE}
                                onChange={(event) => {
                                    ChangeListener(event, 'string');
                                }}
                            />
                        </div>
                        <div className="col-4">
                            <label>City / Ciudad</label>
                            <input
                                type="text"
                                className="form-control"
                                name="CITY"
                                value={vhDataForm.CITY}
                                onChange={(event) => {
                                    ChangeListener(event, 'string');
                                }}
                            />
                        </div>

                        <div className="col-12">
                            <label>Notes / Notas</label>
                            <textarea
                                className="form-control"
                                name="NOTES"
                                value={vhDataForm.NOTES}
                                onChange={(event) => {
                                    ChangeListener(event, 'string');
                                }}></textarea>
                        </div>

                        <div className="col-12 p-2" />

                        <div className="col-4">
                            <button type="submit" className="btn btn-primary">
                                Save/Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
}
