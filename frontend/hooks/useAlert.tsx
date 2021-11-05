import { useState } from 'react';
import Alert, {propsAltert} from '../components/Alert'





export function useAlert<T>(vpInit: T) {


    const [vhAlert, setAlert] = useState<JSX.Element>(null);


    const BuildAlert = (props:propsAltert) => {
        setAlert(
            <Alert type={props.type} icon={props.icon} title={props.title} text={props.text} subtext={props.subtext} />
        );
    }


    const DelAlert = () => {
        setAlert(
            null
        );
    }




    return {
        vhAlert,
        BuildAlert,
        DelAlert
    };
}
