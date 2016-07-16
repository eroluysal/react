import $ from 'jquery';
import React from 'react';
import styles from './../styles/main.scss';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

let d = React.DOM;

let Modal = React.createClass({
  displayName: 'Modal',
  getInitialState: function () {
    return {
      modalTitle: 'Example modal title'
    };
  },
  render: function () {
    return d.div({
      tabIndex: -1,
      className: classNames(styles.modal, styles.fade),
      role: 'dialog',
    }, d.div({
      className: styles['modal-dialog']
    }));
  }
});

ReactDOM.render(<Modal />, document.getElementById('app'));
