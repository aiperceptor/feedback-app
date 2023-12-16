import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return (
    <header>
      <div className="container">
        <h3>{text}</h3>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
};

Header.prototypes = {
  text: PropTypes.string,
};

export default Header;
