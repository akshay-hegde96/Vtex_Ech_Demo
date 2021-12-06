import React from 'react';
import PropTypes from 'prop-types';
import styles from '../modelAccordion.css';

class AccordionSection extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div>
        <div onClick={onClick} className={styles.accordionTitle}>
          <a href="javascript:void(0)" className={styles.titleLink}>
            <div>
              {label}
              <div style={{ float: 'right' }}>
                {!isOpen && <span>&#9660;</span>}
                {isOpen && <span style={{color: '#c32323'}}>&#9650;</span>}
              </div>
            </div>
          </a>
        </div>
        {isOpen && (
          <div className={styles.accordionContent}>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;