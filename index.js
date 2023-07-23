function distanceFromHqInBlocks(blocks){
    if (blocks < 0){
        return "Distance can't be zero.";
    }
    else if (blocks <= 42){
        return 42 - blocks;
    }
    else {
        return blocks - 42;
    }
    }
function distanceFromHqInFeet(blocks){
    const distanceInFeet = 264;
    return distanceFromHqInBlocks(blocks) * distanceInFeet;
}

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination - start) * 264;
    }
    else{
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;
    }
    else if( distance > 400 && distance <= 2000){
        return 0.02 * (distance - 400);
    }
    else if( distance > 2000 && distance < 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
