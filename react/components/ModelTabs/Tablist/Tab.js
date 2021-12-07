import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../model.css';

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }
  
    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;
    
        let className = styles.tabListItem;
    
        if (activeTab === label) {
            className += ' ' + styles.tabListActive;
        }
  
        return (
            <li className={className} onClick={onClick}>
                <a href="javascript:vid(0)">
                    {label}
                </a>
            </li>
        );
    }
  }
  
export default Tab;