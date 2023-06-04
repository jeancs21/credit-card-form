import { paymentMethodLogo } from "../../enum/paymentMethod.enum";

export const getCardCompany = (cardNumber: string) => {
    const company: {[key: string]: RegExp} = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
    }

    for (let key in company ) {
        if (company[key].test(cardNumber)) {
            return key;
        }
    }
    return 'unknown';
}

export const getCardLogo = (cardNumber: string) => {
    const cardCompany = getCardCompany(cardNumber);
    if (cardCompany === 'visa') {
        return paymentMethodLogo.visa;
    } else if (cardCompany === 'mastercard') {
        return paymentMethodLogo.mastercard;
    } else {
        return "";
    }
};
