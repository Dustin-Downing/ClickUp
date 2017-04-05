# ClickUp coding challenge
My mission was to realize a component that receives data by http and shows results into table. Provide sorting by table columns and searching

Run this code with `npm install` followed by `npm start`

## Searching
I complete the searching by creating a custom pipe found in [src/app/filter-array-pipe.ts](src/app/filter-array-pipe.ts)

## Sorting
I completed the searching by creating a custom pipe found in [src/app/order-array-pipe.ts](/src/app/order-array-pipe.ts)

## HTTP data
I used a dummy data.JSON file found at [src/data/reqData.json](/src/data/reqData.json)
The route to this file could easily be replaced with a FQDN to an API

## Boilerplate Source
I started with boilerplate code found [here](https://travis-ci.org/angular/quickstart)
