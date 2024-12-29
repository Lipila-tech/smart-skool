import React, { useEffect } from 'react';

const PaymentForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'http://localhost:8000/lipila_sdk/static/lipila_sdk/lipila_sdk.js';
        script.onload = () => {
            const lipilaSDK = new lipilaSDK('/lipila_sdk/submit_bill_collection/');
            lipilaSDK.renderForm('lipila-form-container');
        };
        document.body.appendChild(script);
    }, []);

    return <div id="lipila-form-container"></div>;
};

export default PaymentForm;