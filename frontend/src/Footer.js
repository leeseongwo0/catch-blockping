import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './Footer.module.css';

export default function Footer({ onContentChange }) { // 콜백 함수 prop 추가
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onContentChange(newValue); // 상태가 변경될 때 부모 컴포넌트에 알림
  };

  return (
    <footer className={styles.footer}>
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange} // 핸들러 함수 사용
        >
          <BottomNavigationAction label="Today" icon={<RestoreIcon />} />
          <BottomNavigationAction label="My Record" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Friends" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
      <p className={styles.footerText}>2024 My Awesome App</p>
    </footer>
  );
}