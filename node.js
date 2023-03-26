function Dodawanie() { //tworzymy funkcje dodawanie
    a = document.getElementsByTagName('input'); //deklarujemy zmienna a, ktora zawiera tablice elementów typu input = 36 inputów
    var x = 0; //deklarujemy zmienna x
    for (var i = 0; i < a.length; i++) { //petla wykonujaca sie tak dlugo az nie skonczy sie dlugosc a, inaczej zwana iteracja
      x = Number(a[i].value) + x //zamienia sie element tablicy w int i dodaje do niej wartosc x 
    }
    document.getElementById("wynik").innerText = x; //wypisuje wynik dodawania
  }
  
  function Odejmowanie() { //tworzymy funkcje odejmowanie
    a = document.getElementsByTagName('input'); //deklarujemy zmienna a, ktora zawiera tablice elementów typu input = 36 inputów
    var x = 0; //deklarujemy zmienna x
    var firstNum = 0; //deklarujemy zmienna firstnum
    for (var i = 0; i < a.length; i++) { //petla iterujaca po tablicy a patrz komentarz linia 4
      if (firstNum == 0 && (a[i].value !== "")) { //sprawdzamy czy zmienna firstnum zawiera zadeklarowana wczesniej wartosc zero i sprawdzamy czy element i tablicy a a dokladniej jego wartosc nie jest pusta
        x = Number(a[i].value); //przypisujemy do zmiennej x wartość elementu i tablicy a i konwertujemy jego typ na number
        firstNum = 1 //przypisujemy wartosc jeden do zmiennej firstnum
      } else if (firstNum != 0) { //sprawdzamy czy firstnum jest inne niz zero
        x = x - Number(a[i].value); //jesli tak to przypisujemy do wartosci x wartosc wyrzenia matematycznego x - wartosc i tablicy a i konwertujemy typ na number
      }
    }
    document.getElementById("wynik").innerText = x; //wypisujemy wynik
  }
  
  function Mnozenie() {
    a = document.getElementsByTagName('input');
    var x = 0;
    var firstNum = 0;
    for (var i = 0; i < a.length; i++) {
      if (firstNum == 0 && (a[i].value !== "")) {
        x = Number(a[i].value);
        firstNum = 1
      } else if (firstNum != 0) {
        x = x * Number(a[i].value);
      }
    }
    document.getElementById("wynik").innerText = x;
  }
  
  function Srednia() { //tworzymy funkcje dodawanie
    a = document.getElementsByTagName('input'); //deklarujemy zmienna a, ktora zawiera tablice elementów typu input = 36 inputów
    var x = 0; //deklarujemy zmienna x
    var nums = 0;
    for (var i = 0; i < a.length; i++) { //petla wykonujaca sie tak dlugo az nie skonczy sie dlugosc a, inaczej zwana iteracja
      x = Number(a[i].value) + x //zamienia sie element tablicy w int i dodaje do niej wartosc x 
      if (a[i].value !== "") {
        nums++
      }
    }
    x = x / nums
    document.getElementById("wynik").innerText = x; //wypisuje wynik dodawania
  }
  