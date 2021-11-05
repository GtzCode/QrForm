import React, { useState } from 'react';
import { tpCompany } from '../../interfaces/company';
import { useDelButton } from '../../hooks/useDelButton';

export default function CardCompany(vpProps: any) {
    const [vhCompany, setCompany] = useState<tpCompany>(vpProps.vpCompany);
    const { vhDelButton, ListDelButton } = useDelButton();

    return (
        <section className="p-3">
            <div className="card">
                <div className="card-header">Empressa: {vhCompany.COMPANY}</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title">
                                Nombre: {vhCompany.NAME}
                            </h5>
                        </div>
                        <div className="col">
                            <h6 className="card-title">
                                Puesto: {vhCompany.JOB}
                            </h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h5 className="card-title">
                                Email: {vhCompany.EMAIL}
                            </h5>
                        </div>
                        <div className="col">
                            <h6 className="card-title">
                                Telefeono: {vhCompany.PHONE}
                            </h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h5 className="card-title">
                                Direccion: {vhCompany.ADDRESS}
                            </h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h5 className="card-title">
                                Pais: {vhCompany.COUNTRY}
                            </h5>
                        </div>
                        <div className="col">
                            <h6 className="card-title">
                                Estado: {vhCompany.STATE}
                            </h6>
                        </div>
                        <div className="col">
                            <h6 className="card-title">
                                Ciudad: {vhCompany.CITY}
                            </h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p className="card-text">
                                Notas: {vhCompany.NOTES}
                            </p>
                        </div>
                    </div>

                    <div className="row row-cols-lg-auto g-3 align-items-center">
                        <div className="col-12">
                            <div className="input-group">
                                <div className="input-group-text">
                                    ID: {vhCompany.ID}
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={vhCompany.ID + ''}
                                    onChange={(event) =>
                                        ListDelButton(vhCompany.ID, event)
                                    }
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <button
                                type="button"
                                disabled={vhDelButton}
                                className="btn btn-primary"
                                onClick={() => {
                                    vpProps.fbDeleteCompany(vhCompany.ID);
                                }}>
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
