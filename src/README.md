### Create new project
```
ng new ANGULAR-HERO -directory . --routing  --style=scss -sd=src -d
```
### change directory to projecte
```
cd ANGULAR-HERO
```
### Generate pages module and page component
```
ng g module pages --routing -m=app -d
ng g c pages/pages -it -flat -m=pages -d
```
### Generate heroe module and import it by pages
```
ng g module pages/heroes --routing -m=pages -d
```
### Add heroes service and provide it to HeroesModule
```
ng g s pages/heroes/heroes -m=heroes
```
### Generate heroes , hero-list and hero-detail components
```
ng g c pages/heroes/heroes -d
ng g c pages/heroes/hero-list -d
ng g c pages/heroes/hero-detail -d
```
### Generate hero model
```
ng g class pages/heroes/hero -d
```
### Generate Dashboard module and component
```
ng g module pages/dashboard --routing -d
ng g c pages/dashboard/dashboard -m=pages -d
```
