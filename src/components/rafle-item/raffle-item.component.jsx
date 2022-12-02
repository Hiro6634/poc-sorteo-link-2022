const RaffleItem = ({title, maxWinners, state}) => {
    return(
        <div>
            <span>{title}</span>
            <span>{maxWinners}</span>
            <span>{state}</span>
        </div>
    );
}

export default RaffleItem;