const btnPlus = document.querySelector("[data-addition]");
const btnMin = document.querySelector("[data-subtraction]");
const btnMultipli = document.querySelector("[data-multiplication]");
const btnDiv = document.querySelector("[data-division]");

btnPlus.addEventListener("click", function() {
    addition();
});
btnMin.addEventListener("click", function() {
    subtraction();
});
btnMultipli.addEventListener("click", function() {
    multiplication();
});
btnDiv.addEventListener("click", function() {
    division();
});

function addition() {
    const inNumber1 = Number(document.querySelector("[data-inputNumOne]").value);
    const inNumber2 = Number(document.querySelector("[data-inputNumTwo]").value);
    const result = document.querySelector("[data-result]");

    const plus = inNumber1 + inNumber2;

    result.innerHTML = plus;
    return result;
};

function subtraction() {
    const inNumber1 = Number(document.querySelector("[data-inputNumOne]").value);
    const inNumber2 = Number(document.querySelector("[data-inputNumTwo]").value);
    const result = document.querySelector("[data-result]");

    const min = inNumber1 - inNumber2;

    result.innerHTML = min;
    return result;
};

function multiplication() {
    const inNumber1 = Number(document.querySelector("[data-inputNumOne]").value);
    const inNumber2 = Number(document.querySelector("[data-inputNumTwo]").value);
    const result = document.querySelector("[data-result]");

    const multipli = inNumber1 * inNumber2;

    result.innerHTML = multipli;
    return result;
};

function division() {
    const inNumber1 = Number(document.querySelector("[data-inputNumOne]").value);
    const inNumber2 = Number(document.querySelector("[data-inputNumTwo]").value);
    const result = document.querySelector("[data-result]");

    const div = inNumber1 / inNumber2;

    result.innerHTML = div;
    return result;
};