const submitBtn = document.querySelector('#submitBtn') as HTMLInputElement;
const inputFirstname = document.querySelector('#inputFirstname') as HTMLInputElement;
const inputLastname = document.querySelector('#inputLastname') as HTMLInputElement;
const countries = document.querySelector('#land') as HTMLSelectElement;

type SimplePerson = {
    firstName: string,
    lastName: string,
    country: string
};

const person1: SimplePerson = {
    firstName: '',
    lastName: '',
    country: ''
};

submitBtn.addEventListener('click', () => {
    console.log(inputFirstname.value);
    console.log(inputLastname.value);
    console.log(countries.value);

    person1.firstName = inputFirstname.value;
    person1.lastName = inputLastname.value;
    person1.country = countries.value;

    console.log(person1);
});