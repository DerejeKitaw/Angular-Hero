### Create new project
```
ng new ANGULAR-HERO -directory . --routing  --style=scss -sd=src -d
```
### change directory to projecte
```
cd ANGULAR-HERO
```
### Generate heroe module and import it by app
```
ng g module heroes --routing -m=app -d
```
### Add heroes service and provide it to HeroesModule
```
ng g s heroes/heroes -m=heroes -d
```
### Generate heroes , hero-list and hero-detail components
```
ng g c heroes/heroes -d
ng g c heroes/hero-list -d
ng g c heroes/hero-detail -d
```
### Generate hero model
```
ng g class heroes/hero -d
```