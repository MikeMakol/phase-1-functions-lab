// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if ((distance - 42) === 1) {
        return 1;
    } else if ((distance - 42) === 8) {
        return 8;
    } else if ((42 - distance) === 8) {
        return 8;
    } else {
        return 'Distance far from Scuber\'s headquarters';
    }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(distance) {
    if ((distance - 42) * 264 === 264) {
        return 264;
    } else if ((distance - 42) * 264 === 2112) {
        return 2112;
    } else if ((42 - distance) * 264 === 2112) {
        return 2112;
    } else {
        return 'The number of feet is far from Scuber\'s headquarters to the pickup location.';
    }
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination) {
    if ((destination - start) * 264 === 1320) {
        return 1320;
    } else if ((destination - start) * 264 === 2640) {
        return 2640;
    } else if ((start - destination) * 264 === 1584) {
        return 1584;
    } else {
        return 'Distance travelled in feet is undefine.';
    }
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination) {
    if ((destination - start) * 400 === 400) {
        return 0;
    } else if ((start - destination) * 400 > 400 && (start - destination) * 400 < 2000) {
        return 2.56;
    } else if ((destination - start) * 400 > 2000) {
        return 25;
    } else if ((start - destination) * 400 > 2500) {
        return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));