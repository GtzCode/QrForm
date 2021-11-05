import { useState } from 'react';

export function useForm<T>(vpInit: T) {
    const [vhDataForm, setDataForm] = useState(vpInit);

    const ChangeListener = (
        event: any,
        vpType: 'string' | 'number' | 'boolean'
    ) => {
        var isType: string = vpType.toUpperCase();
        var isValue: string = event.target.value;
        var isTypeValue: any = null;

        const isBooleanTrue: string = 'TRUE';
        const isBooleanFalse: string = 'FALCE';

        if (isType === 'BOOLEAN') {
            if (isValue.toUpperCase() == isBooleanTrue) {
                isTypeValue = true;
            } else if (isValue.toUpperCase() == isBooleanFalse) {
                isTypeValue = false;
            }
        } else if (isType === 'NUMBER') {
            if (!isNaN(Number(event.target.value))) {
                isTypeValue = Number(event.target.value);
            } else {
                isTypeValue = event.target.value;
            }
        } else {
            isTypeValue = event.target.value;
        }

        setDataForm({
            ...vhDataForm,
            [event.target.name]: isTypeValue
        });
    };

    const ChangeAll = (vpData: T) => {
        setDataForm(vpData);
    };

    return {
        vhDataForm,
        ChangeListener,
        ChangeAll
    };
}
