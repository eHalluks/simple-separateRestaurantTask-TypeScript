/*

    TASK: 15 (#fundamentals)

    DESCRIPTION: Refactor JavaScript on TypeScript

    [ done ] TODO: 1# Refactor a code
    [ done ] TODO: 2# Create types
    [ done ] TODO: 3# Create a private method as a helper for types

 */


import {Restaurant} from "./restaurant";
import {RestaurantEventName, RestaurantTableCountChangeCallback} from "./types/restaurant-events";

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
    .on(RestaurantEventName.Open, () => console.log('Otwarto restaurację.'))
    .on(RestaurantEventName.Close, () => console.log('Zamknięto restaurację.'))
    .on(RestaurantEventName.TableCountUpdate, (change => {
        tablesCount += change;
        console.log(`Dostępnych stolików ${tablesCount}.`);
    })as RestaurantTableCountChangeCallback);

megaRestaurant.open();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.reserveTable();
megaRestaurant.cancelTableReservation();
megaRestaurant.reserveTable();
megaRestaurant.reserveTable();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.cleanupTable();
megaRestaurant.close();
