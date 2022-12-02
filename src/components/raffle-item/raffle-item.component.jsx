const RaffleItem = ({reward, maxWinners, state}) => {
    return(
        <div>
            |
            <span>{reward}</span>
            |
            <span>{maxWinners}</span>
            |
            <span>{state}</span>
            |
        </div>
    );
}

export default RaffleItem;