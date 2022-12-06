import { useState } from 'react';

const FormatCamelCase = () => {
    const [txt, setTxt] = useState('');
    const [formatTxt, setFormatTxt] = useState('');


    const changeTxt = () => {
        const newTxt =  txt.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        setFormatTxt(newTxt);
    }

    return (
        <>
            <h2>input 텍스트 camelCase로 변환</h2>
            <input type="text" value={txt} onChange={e => setTxt(e.target.value)} />
            <button onClick={changeTxt}>변환</button>
            <p>{formatTxt}</p>
        </>
    );
}

export default FormatCamelCase;