import { ChangeEvent, useState } from 'react';

export function useDelButton<T>() {

    const [vhDelButton, setDelButton] = useState(true);
    

    const ListDelButton = (vpKeyWord:T, event: ChangeEvent<HTMLInputElement>) => {

        const vlKeyWord:string = String(vpKeyWord);
        const vlLockWord:string =  String(event.target.value)
        
        if(vlLockWord == vlKeyWord){
            setDelButton(false);
        } else {
            setDelButton(true);
        }
        
    };


    return {
        vhDelButton,
        ListDelButton
    };
}


