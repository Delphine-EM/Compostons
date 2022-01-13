// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './field.scss';

/**
 * Composant permettant d'afficher un input.
 * @param {string} name
 * @param {string} type
 * @param {string} placeholder
 * @param {string} value
 * @param {function} onChange
 * @returns {JSX.Element}
 */
const Field = ({
    name,
    type,
    placeholder,
    value,
    onChange,
}) => (
    <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="field"
        value={value}
        onChange={onChange}
        required
    />
);

Field.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
    type: 'text',
};

export default Field;
