import Button from '../styled/Button';

const CollectionButton = ({
    textOn, textOff, active, onCheck, onUncheck
}) => {
    const handleClick = () => active ? onUncheck() : onCheck();

    return (
        <Button
            type="button"
            selected={active}
            onClick={handleClick}
        >
            {active ? textOff : textOn}
        </Button>
    );
};

export default CollectionButton;