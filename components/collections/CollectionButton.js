import Button from '../styled/Button';

const CollectionButton = ({
    textOn, textOff, IconOn, IconOff, active, onCheck, onUncheck
}) => {
    const handleClick = () => active ? onUncheck() : onCheck();

    return (
        <Button
            type="button"
            selected={active}
            onClick={handleClick}
        >
            {active ? 
                <IconOff size="1em" />
                : 
                <IconOn size="1em" />
            }
            {active ? 
                <span>{textOff}</span>
                :
                <span>{textOn}</span>
            }
        </Button>
    );
};

export default CollectionButton;