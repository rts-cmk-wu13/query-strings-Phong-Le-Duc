# Funktionsbeskrivelser - LocalStorage

## saveToLocalStorage

Funktionen saveToLocalStorage tager to argumenter: key og value.

argumentet key er en string og repræsenterer den nøgle som data skal gemmes under i LocalStorage.

Argumentet value er de data som skal gemmes. Data kan være et af følgende formater: 
- string
- number
- boolean
- object
- array
Value argumentet skal konverteres til en string før det skrives.

Funktionen returnerer en string med besked om at data blev gemt under den givne nøgle..

## readFromLocalStorage 

Funktionen readFromLocalStorage tager ét argument: key.

Argumentet key er en string, og repræsenterer den nøgle data er gemt under i LocalStorage.

Key skal bruges til at læse data fra LocalStorage.

Når værdien er læst, skal data konverteres tilbage til det oprindelige format.

Funktionen returnerer den aflæste konverterede værdi, eller null, hvis nøglen ikke findes.

## deleteFromLocalStorage

Funktionen deleteFromLocalStorage tager ét argument: key.

Argumentet key er en string, og repræsenterer den nøgle der skal slettes i LocalStorage.

Funktionen skal slette elementet fra localstorage 

Funktionen returnerer en string, som bekræfter at elementet er slettet i localstorage, eller null, vis nøglen ikke findes.





