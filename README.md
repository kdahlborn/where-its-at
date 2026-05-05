### I min applikation har jag använt mig av följande bibliotek

# Mantine

Mantine har kommit att bli lite av en favorit eftersom det är, i alla fall hittills, lätt att använda då dokumentationen har väldigt tydliga instruktioner och demos. Det är ett komponentsbibliotek som ger ett brett urval av färdigbyggda komponenter som man sedan kan anpassa och styla efter tycke. Eftersom applikationen innehåller flöden som varukorg, bekräftelser och laddningslägen har jag använt mig av:

- **Modal** - ett fokuserat fönster som visas ovanpå sidans innehåll. I detta fall används den som en bekräftelse när en användare lägger till något i varukorgen, där användaren kan välja att fortsätta handla eller gå vidare till varukorgen.
- **Loader** - en loading-animation av olika varianter. Jag använer den i väntan på datan från API-anrop samt för att simulera laddningstid vid orderbeställning.
- **Loading Overlay** - ett lager ovanpå innehållet som visar att något laddar och tillfälligt förhindrar interaktion. Man kan anpassa och styla lagret, samt lägga till innehåll på själva lagret. Vilket jag gjorde för att simulera en orderbeställning i en verklig applikation.

# Motion

Ett animationsbibliotek som används för att skapa rörliga övergångar och interaktioner i gränssnittet. Jag valde att använda motion i min applikation eftersom det är roligt att exprimentera med och det hjälper till att skapa en mer "levande" känsla i gränssnittet, vilket gör att övergångar känns mindre abrupta. För att åstadkomma detta har jag använt animationer för att:

- Få varumärket att "växa fram" på landing page.
- "Swipe-känsla" när man navigerar mellan olika pages.
- Få check-ikonen att "poppa" fram i loading overlay.

# Swiper

Ett bibliotek som skapar sliders och karuseller som låter användare svepa mellan innehåll. Efter att ha sett exemplet från tidigare elev och med tanke på hur biljetterna skulle presenteras i min applikation kändes det som ett självklart val att använda Swiper i detta sammanhang.

Jag använde mig av **Effect Cards** för att visa biljetterna som en korthög, vilket gav en mer visuell och interaktiv presentation jämfört med en vanlig lista.

## FontAwesome

Ett ikonbibliotek som används för att enkelt integrera ikoner i gränssnittet. I min applikation har jag använt ikoner bland annat till navbaren och för att meddela användaren när något gått bra eller snett, vilket ger användaren tydligare budskap och gör gränssnittet mer intuitiv.

## React-hot-toast

Ett bibliotek för att visa små notiser i gränssnittet. Det används för att ge användaren snabb och tydlig feedback vid olika händelser. Jag använde det, mest för att prova på, för att meddela användare om API-anropet misslyckats och listan av events inte kan visas.

## UUID

Ett "utility-bibliotek" som används för att generera unika ID:n. Detta använde jag i funktionen för att skapa biljetter vid bokning, där varje enskild biljett tilldelas ett unikt ID.
