import { LuPlus, LuX } from 'react-icons/lu';
import { Container } from './styles';

export function NoteItem({ isNew, value, onClick, ...rest }){
    return(
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={onClick}
                className={isNew ? "button-add" : "button-delete"}
            >
                {isNew ? <LuPlus /> : <LuX />}
            </button>
        </Container>
    );
}