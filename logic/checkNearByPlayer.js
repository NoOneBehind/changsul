const DIRECTION_FACTOR = [1, 0, -1, 0];

const checkDownNearByPlayer = (players, movingPlayerIndex) => {
    for (i = 0; i < 4; i +=1 ) {
    if (players[movingPlayerIndex].getXpos() + DIRECTION_FACTOR[(movingPlayerIndex + 2) % 4] == players[i].getXpos() && players[movingPlayerIndex].getYpos() + DIRECTION_FACTOR[(movingPlayerIndex + 3) % 4] == players[i].getYpos()) {
        return players[i];
        }  
    }
    return false; 
};

const checkLeftNearByPlayer = (players, movingPlayerIndex) => {
    for (i = 0; i < 4; i +=1 ) {
    if (players[movingPlayerIndex].getXpos() + DIRECTION_FACTOR[(movingPlayerIndex + 3) % 4] == players[i].getXpos() && players[movingPlayerIndex].getYpos() + DIRECTION_FACTOR[(movingPlayerIndex) % 4] == players[i].getYpos()) {
        return players[i];
        }  
    }
    return false; 
};

const checkRightNearByPlayer = (players, movingPlayerIndex) => {
    for (i = 0; i < 4; i +=1 ) {
    if (players[movingPlayerIndex].getXpos() + DIRECTION_FACTOR[(movingPlayerIndex + 1) % 4] == players[i].getXpos() && players[movingPlayerIndex].getYpos() + DIRECTION_FACTOR[(movingPlayerIndex + 2) % 4] == players[i].getYpos()) {
        return players[i];
        }  
    }
    return false; 
};

const checkUpNearByPlayer = (players, movingPlayerIndex) => {
    for (i = 0; i < 4; i +=1 ) {
    if (players[movingPlayerIndex].getXpos() + DIRECTION_FACTOR[(movingPlayerIndex) % 4] == players[i].getXpos() && players[movingPlayerIndex].getYpos() + DIRECTION_FACTOR[(movingPlayerIndex + 1) % 4] == players[i].getYpos()) {
        return players[i];
        }  
    }
    return false; 
};
