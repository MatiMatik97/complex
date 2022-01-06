import React from 'react';

export default () => {
  return (
    <div style={{textAlign: 'justify', padding:' 15px'}}>
      Zadanie oparte na instrukcji laboratorium 9.

      <ul>
        Dodane/zmienione:
        <li>"react-scripts --openssl-legacy-provider start" - dodano w package.json clienta, ze wzgledu na kompatybilnosc z wersja node</li>
        <li>struktura tabeli values (nowe pole id) umozliwiajaca wyswietlenie 10 ostatnich rekordow</li>
        <li>api dostosowane na potrzeby wyswietlania lub zwrocenia bledu</li>
        <li>aktualizacja strony po obliczeniu ciagu</li>
        <li>sposob wyswietlania formularza i historii na stronie Home</li>
        <li>strona dokumentacji</li>
      </ul>
    </div>
  );
};
