import React from "react";
import Header from "../Header/Header";
import classes from "./Calculator.module.css"
import CurrencyInput from "./CurrencyInput/CurrencyInput";
import { useState, useEffect } from "react";
import axios from "axios"
import Footer from "../Footer/Footer";

const Calculator = () => {

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState("USD");
    const [currency2, setCurrency2] = useState("EUR");
    const [rates, setRates] = useState([])

    useEffect(() => {
        axios.get('https://cdn.cur.su/api/latest.json')
            .then(response => {
                setRates(response.data.rates);
            })
    }, []);

    useEffect(() => {
        function init() {
            headAmountChange(1);
        }
        init();
        // eslint-disable-next-line
    }, [rates]);

    function fornat(number) {
        return number.toFixed(4)
    }

    function headAmountChange(amount1) {
        setAmount2(fornat(amount1 * rates[currency2] / rates[currency1]))
        setAmount1(amount1);
    }

    function headCurrenslyChange1(currency1) {
        setAmount2(fornat(amount1 * rates[currency2] / rates[currency1]))
        setCurrency1(currency1);
    }

    function headAmountChange2(amount2) {
        setAmount1(fornat(amount2 * rates[currency1] / rates[currency2]))
        setAmount2(amount2);
    }

    function headCurrenslyChange2(currency2) {
        setAmount1(fornat(amount2 * rates[currency1] / rates[currency2]))
        setCurrency2(currency2);
    }
    return (
        <div className={classes.head}>
            <Header />
            <div className={classes.main}>
                <div className={classes.title}>
                    <div className={classes.category}>For Lad24</div>
                    <h1 className={classes.hero_title}>Сurrency in real time</h1>
                </div>
                <div className={classes.mg}>
                    <CurrencyInput
                        onAmountChange={headAmountChange}
                        onCurrencyChange={headCurrenslyChange1}
                        currencies={Object.keys(rates)}
                        amount={amount1}
                        currency={currency1} />
                    <CurrencyInput
                        onAmountChange={headAmountChange2}
                        onCurrencyChange={headCurrenslyChange2}
                        currencies={Object.keys(rates)}
                        amount={amount2}
                        currency={currency2} />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Calculator;