# Responzívne navigačné menu a grid (projekt) - Dokumentácia

Zadaním bolo vytvoriť landing page, navigačné menu s dropdownom, ktorý využíva grid. Keď naklikneme na dropdown, otvorí sa vlastná podstránka s vhodne upraveným fullscreen gridom.
## Základy stránky

### Responzíva

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
- bez tohto kódu by nám nefungovala responzíva.

### Importovanie stylesheetov

```html
<link rel="stylesheet" href="/school/navigation/css/index.css" />
```
- tento kód importuje CSS kód do HTML súboru.

## Stavba stránky

### Hlavička
```html
<header>...</header>
```
```css
header{
    position: fixed; /*Zafixuje element na danú pozíciu*/
    top:0; /*0px zhora: Element ostane vždy na vrchu*/
    left:0; /*0px zľava: Element ostane vždy naľavo */
    z-index: 50; /*Dá navigačné menu pred ostatné elementy*/
}
```
### Dropdown
```html
<div class="dropdownWrapper">
    <a href="./html/sluzby.html">Služby</a>
    <div class="dropdown">...</div>
</div>
```
```css
.dropdown{
    display: none; /* Obsah dropdownu je schovaný */
}
.dropdownWrapper:hover .dropdown{
    display: grid; /* Ak hoverneme na hocičo vo vnútri dropdownWrapper, vrátane samotného dropdownu, dropdown sa zjaví */
}
```
### Responzívnosť elementov
```css
@media screen and (max-width: 768px) {
    ... /* Štýly v týchto zátvorkach sa nám aplikujú, ak je šírka stránky pod 768px */
}
```

## Responzíva
### Otváracie menu (riešené bez javascriptu)
```html
<input id="navController" type="checkbox" aria-hidden="true"> <!--Ovláda stav navigačného menu. Prázdny checkbox = 0 = schované; Zaškrtnuté = 1 = zobrazené -->
<nav>
    ...
</nav>
...
<label for="navController" class="menu">...</label> <!--Pri ťuknutí label elementu, sa input priradený labelu focusne (pri checkboxe sa zmení jeho stav - zaškrtne sa alebo vyprázdni sa)-->
```
```css
@media screen and (max-width: 768px) {
    nav{
        position: fixed;
        left: -200px; /* Pri mobilnom zobrázení posunieme navigačné menu preč z obrázovky */
    }
    input:checked ~ nav{
        left:0px !important; /* Ak je input zašrktnutý, zobrazíme navigačné menu */
    }
}
```