import React, { FormEvent } from 'react';
import Layout from '../../components/Layout';
import { tpOptions,emptyOptions } from '../../interfaces/options';
import {initOptions,PUT_OPTIONS,PUT_OPTIONS_RESET} from '../../graphql/options/options';
import { useForm } from '../../hooks/userForm';
import { useAlert } from '../../hooks/useAlert';
import { useMutation } from '@apollo/client';

export default function Options(Props:any) {
    const vlMinImput: number = 0;
    const vlMaxImput: number = 10;

    const { vhDataForm, ChangeListener, ChangeAll } = useForm<tpOptions>(Props.DataOptions);
    const { vhAlert, BuildAlert } = useAlert(null);

    const [putOptions] = useMutation(PUT_OPTIONS);
    const [putOptionReset] = useMutation(PUT_OPTIONS_RESET);

    const saveData = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const vpPutOption = (
                await putOptions({ variables: { data: vhDataForm } })
            ).data.UpdateOptions;
            ChangeAll(emptyOptions);
            ChangeAll(vpPutOption);
            BuildAlert({ type: 'success', title: 'Saved options' });
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
            BuildAlert({
                type: 'danger',
                title: 'Can not saved options'
            });
        }
    };

    const resetData = async (event: any) => {
        const vpPutOptionReset = (await putOptionReset()).data.ResetOptions;
        console.log(vpPutOptionReset);
        ChangeAll(vpPutOptionReset);
        BuildAlert({ type: 'warning', title: 'Reset default options' });
    };

    return (
        <Layout title="Options">
            {vhAlert}
            <div className="row g-1">
                <form onSubmit={saveData}>
                    <div className="container p-5">
                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    My Company
                                </label>
                            </div>

                            <div className="col-6">
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        name="MYCOMPANY"
                                        value={vhDataForm.MYCOMPANY}
                                        onChange={(event) => {
                                            ChangeListener(event, 'string');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Character
                                </label>
                            </div>

                            <div className="col-1">
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        maxLength={1}
                                        className="form-control form-control-sm"
                                        name="CHAR"
                                        value={vhDataForm.CHAR}
                                        onChange={(event) => {
                                            ChangeListener(event, 'string');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Company
                                </label>
                            </div>
                            <div className="col-1">
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        max={vlMaxImput}
                                        min={vlMinImput}
                                        className="form-control form-control-sm"
                                        name="COMPANY"
                                        value={vhDataForm.COMPANY}
                                        onChange={(event) => {
                                            ChangeListener(event, 'number');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Name
                                </label>
                            </div>
                            <div className="col-1">
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        max={vlMaxImput}
                                        min={vlMinImput}
                                        className="form-control form-control-sm"
                                        name="NAME"
                                        value={vhDataForm.NAME}
                                        onChange={(event) => {
                                            ChangeListener(event, 'number');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Job
                                </label>
                            </div>
                            <div className="col-1">
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        max={vlMaxImput}
                                        min={vlMinImput}
                                        className="form-control form-control-sm"
                                        name="JOB"
                                        value={vhDataForm.JOB}
                                        onChange={(event) => {
                                            ChangeListener(event, 'number');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Email
                                </label>
                            </div>
                            <div className="col-1">
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        max={vlMaxImput}
                                        min={vlMinImput}
                                        className="form-control form-control-sm"
                                        name="EMAIL"
                                        value={vhDataForm.EMAIL}
                                        onChange={(event) => {
                                            ChangeListener(event, 'number');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Phone
                                </label>
                            </div>
                            <div className="col-1">
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        max={vlMaxImput}
                                        min={vlMinImput}
                                        className="form-control form-control-sm"
                                        name="PHONE"
                                        value={vhDataForm.PHONE}
                                        onChange={(event) => {
                                            ChangeListener(event, 'number');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Address
                                </label>
                            </div>
                            <div className="col-1">
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        max={vlMaxImput}
                                        min={vlMinImput}
                                        className="form-control form-control-sm"
                                        name="ADDRESS"
                                        value={vhDataForm.ADDRESS}
                                        onChange={(event) => {
                                            ChangeListener(event, 'number');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Country
                                </label>
                            </div>
                            <div className="col-1">
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        max={vlMaxImput}
                                        min={vlMinImput}
                                        className="form-control form-control-sm"
                                        name="COUNTRY"
                                        value={vhDataForm.COUNTRY}
                                        onChange={(event) => {
                                            ChangeListener(event, 'number');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    State
                                </label>
                            </div>
                            <div className="col-1">
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        max={vlMaxImput}
                                        min={vlMinImput}
                                        className="form-control form-control-sm"
                                        name="STATE"
                                        value={vhDataForm.STATE}
                                        onChange={(event) => {
                                            ChangeListener(event, 'number');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    City
                                </label>
                            </div>
                            <div className="col-1">
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        max={vlMaxImput}
                                        min={vlMinImput}
                                        className="form-control form-control-sm"
                                        name="CITY"
                                        value={vhDataForm.CITY}
                                        onChange={(event) => {
                                            ChangeListener(event, 'number');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row g-2 p-1">
                            <div className="col-1">
                                <label className="col-sm-2 col-form-label col-form-label-sm">
                                    Notes
                                </label>
                            </div>
                            <div className="col-1">
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        max={vlMaxImput}
                                        min={vlMinImput}
                                        className="form-control form-control-sm"
                                        name="NOTES"
                                        value={vhDataForm.NOTES}
                                        onChange={(event) => {
                                            ChangeListener(event, 'number');
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="row g-2 p-1">
                            <div className="col-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary">
                                    Save
                                </button>
                            </div>

                            <div className="col-6">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={resetData}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export async function getServerSideProps () {
    var vlRequest = initOptions();
    const DataOptions = await vlRequest.then((res) => {
        return res.allOptions;
    });

    return {props:{DataOptions}};
};
