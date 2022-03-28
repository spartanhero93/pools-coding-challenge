1. Decided to use "fetch" on the initiation of an autocomplete, the autocomplete then checks if the property
  "fetchAsyncData()" exists. This would be false for static data, as it can be passed in the "config.data" property.
2. since the user data doesn't contain a "label" property for each user, I decided to add it by combining "first_name"
and "last_name".
  * Any future developer can see this and most likely insinuate that a label property muse be added to the data beforehand.
3. Had an issue with using async due to babel 7 version, decided to use fetch in the autocomplete instead.
4. Started working on keyboard navigation.

Finishing thoughts/Future improvements:
* Would have wanted to finish keyboard navigation, but i believe i Didn't have enough time.
* Would have improved styling a bit more.
* Would have added more information to the user when selecting an item in the dropdowns.
* Security implementations for user input for example html tags, periods, and numbers.