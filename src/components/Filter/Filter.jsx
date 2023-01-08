import propTypes from 'prop-types';
import { FormInput, Label } from 'components/ContactsForm/ContactsForm.styled';
import { Div } from './Filter.styled';


const Filter = ({value, onChange}) => (
    <Div>
        <Label>Find contacts by Name</Label>
        <FormInput
            type="text"
            name="filter"
            placeholder="Enter filter"
            value={value}
            onChange={onChange}
        />
    </Div>
    
);
Filter.propTypes = {
    filter: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}

export default Filter;