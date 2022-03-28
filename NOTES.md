1. Decided to use "fetch" on the initiation of an autocomplete, the autocomplete then checks if the property
  "fetchAsyncData()" exists. This would be false for static data, as it can be passed in the "config.data" property.
2. since the user data doesn't contain a "label" property for each user, I decided to add it by combining "first_name"
and "last_name".
  * Any future developer can see this and most likely insinuate that a label property muse be added to the data beforehand.
3. Had an issue with using async due to babel 7 version, decided to use fetch in the autocomplete instead