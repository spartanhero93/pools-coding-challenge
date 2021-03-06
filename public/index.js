import Autocomplete from '../src/Autocomplete/Autocomplete';
import countries from '../data/countries.json';

import './styles.css';

const countriesWrapper = document.getElementById('countries');
const countriesResults = document.getElementById('countries-results');
const selectedCountry = document.getElementById('selected-country');
countriesWrapper.autocomplete = new Autocomplete(countriesWrapper, {
  data: countries,
  resultsEl: countriesResults,
  renderResult: country => {
    const item = document.createElement('div');
    item.innerText = country
      ? country.label
      : 'Start typing for options';
    return item;
  },
  onSelect: country => {
    console.log('select', country);
    selectedCountry.innerText = `${country.label} (${country.code})`;
  },
});

const userWrapper = document.getElementById('users');
const userResults = document.getElementById('users-results');
const selectedUser = document.getElementById('selected-users');
userWrapper.autocomplete = new Autocomplete(userWrapper, {
  data: [],
  resultsEl: userResults,
  fetchAsyncData: () =>
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(({ data }) => {
        const users = [...data];
        users.map(user => user.label = `${user.first_name} ${user.last_name}`)
        return users;
      }),
  renderResult: user => {
    const item = document.createElement('div');
    user 
      ? item.innerText = `${user.first_name} ${user.last_name}` 
      : item.innerText ='Start typing for options'
    return item;
  },
  onSelect: user => {
    console.log('select', `${user.first_name} ${user.last_name}`);
    selectedUser.innerText = `${user.first_name} ${user.last_name}`;
  },
});
