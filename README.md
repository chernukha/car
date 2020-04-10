# Cars

## Angular environment

Angular CLI: 9.1.1  
Node: 12.13.0  
OS: darwin x64  

#### Angular: 9.1.1  
... animations, cli, common, compiler, compiler-cli, core, forms  
... language-service, platform-browser, platform-browser-dynamic  
... router  
Ivy Workspace: Yes  

#### Package  Version
@angular-devkit/architect  0.901.1  
@angular-devkit/build-angular  0.901.1  
@angular-devkit/build-optimizer  0.901.1  
@angular-devkit/build-webpack  0.901.1  
@angular-devkit/core 9.1.1  
@angular-devkit/schematics 9.1.1  
@ngtools/webpack 9.1.1  
@schematics/angular  9.1.1  
@schematics/update 0.901.1  
rxjs 6.5.5  
typescript 3.8.3  
webpack  4.42.0  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build --prod --stats-json` to build the project with stats. The build artifacts will be stored in the `dist/cars` directory.

## Bundle Analyzer 

Run `npx webpack-bundle-analyzer {{path}}` - ex. `npx webpack-bundle-analyzer dist/cars/stats-es2015.json`


## dist/...
carsIVY, carsVE - with vendor	 
carsIVYstats, carsVEstats - with vendor and stats  
carsIVYstatsNoV, carsVEstatsNoV - with stats and without vendor  
	

