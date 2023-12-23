// G-Version - Split the nota
START

FUNCTION named "Slutsumma"
Set variabel nota = [userinput]
Set variabel dricks = [userinput if more than 0.8 return to userinput]
Set variabel guests = [userinput if less than 0,99 return to userinput]
Set variabel summa = [userinput]
function slutsumma per guests = summa (1+dricks) / guests

if dricks > more than 0.8 OR guests < 0.99 Then
print "Felaktig inmatning vänligen slå in mindre procent dricks eller minst en gäst"
ELSE  
print "Grattis till att du stödjer en ohälsosam trend"
ENDIF
ENDFUNCTION
END

CALL FUNCTION named "namnet på funktionen"

IF "villkor" THEN
ELSE

INPUT "ett namn"
PRINT "något att skriva på skärmen"

SET value // Sätter ett värde som kan användas för att jämföra mot

CALCULATE // Används för att räkna ut något

RANDOM "number" // Slumpa ett tal mellan två värden

LOOP through "nummer" to "nummer"
ENDLOOP

//VG-Version - Lewis Carrol Word Puzzle
function play()
    Set Variabel ordbok = [......]; //Innehåller samtliga ord i det engelska språket
    Set Variabel startOrd till "Four";
    Set Variabel slutOrd till "Five";
    Set Variabel nyttord till "X"
    Set Variabel nmbrofrounds till 0;
    Set variabel diffcount till 0;

    function IsoneLetterApart (wordOne, wordTwo)

    Loop through variabel ordbok if [userinput] is variabel nyttord check if diffcount == 0
    If true check if variabel nyttord is in variabel ordbok
    if true call function IsoneLetterApart  
    if false then print "Du har gjort fel. Vänligen försök igen" then goto function play
    if all true then variabel startord = variabel nyttord and increase variabel nmbrofrounds to 1
    Then repeat loop and increase variable of nmbrofrounds by 1 for each loop
    When nyttord = slutord then exit loop and print "Grattis det tog "value of variable nmbrofrounds"
   
    ENDLOOP
    ENDIF
    ENDFUNCTION

    function IsoneLetterApart (wordOne, wordTwo)
    Set variabel diffcount till 0;

    return diffCount === 1; //returnerar sant om endast en bokstav ändrats , annars falskt
    ENDFUNCTION

    //Unused Code Due to Error
    Loop through variabel ordbok if diffcount == 1 between startord and slutord then let startord = mellanord
    Show  previous version of mellanord in inputfield. 
    Continue loop until mellanord = slutord
    When diffcount == 0 between variabel startord and variabel slutord print "Grattis! Det tog "Amount of Loops" för dig att lösa det"
    Set Variabel mellanord till "X" // X betyder alla ord mellan four och five som går överhuvudtaget att använda sig av. Den variabel är tänkt att fungera som variabel ordbok fast med enbart lösningar.