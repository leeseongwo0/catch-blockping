import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Content.module.css";

function Content({ counter }) {
  return (
    <div className={styles.content}>
      {counter < 1 ? (
        <h3>아침마다 누르고 포인트 적립해요!</h3>
      ) : (
        <h3>적립되었습니다. 내일 다시 만나요!:)</h3>
      )}
    </div>
  );
}

Content.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Content;