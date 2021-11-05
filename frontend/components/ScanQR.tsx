import React, { useState } from 'react';
//import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import dynamic from 'next/dynamic';
import { tpCompany } from '../interfaces/company';
import { GQM_ORDER_DATA_QR } from '../graphql/index';
import { useMutation } from '@apollo/client';

export default function ScanQR(props:any) {
    const BarcodeScannerComponent = dynamic(() => import('react-qr-barcode-scanner'), {
        ssr: false
    });

    const [vhOnWebCampQr, setOnWebCampQr] = useState(false);
    const [gqmOrderDataQR] = useMutation(GQM_ORDER_DATA_QR);

    const ftOrder = async (vpDataQR: string) => {
        var vlDataQR: tpCompany = (
            await gqmOrderDataQR({
                variables: { vpQrText: vpDataQR }
            })
        ).data.OrderDataQR;

        props.ChangeAll(vlDataQR);
        props.DelAlert();
    };



    return (
        <section> 
            <div className="row justify-content-md-center">
            <div className="col-md-auto">
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        onChange={() => {
                            setOnWebCampQr(!vhOnWebCampQr);
                        }}
                    />
                    <label className="form-check-label">
                    Activate the scanner QR
                    </label>
                </div>
                </div>
            </div>

            <div className=" row justify-content-md-center">
            
                {vhOnWebCampQr ? (
                    <BarcodeScannerComponent
                        width={200}
                        height={200}
                        onUpdate={(err, result: any) => {
                            if (result) {
                                ftOrder(result.text);
                            }
                        }}
                    />
                ) : null}
                </div>
            
        </section>
    );
}
