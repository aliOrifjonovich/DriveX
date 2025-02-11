import { Global } from '@emotion/react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Dispatch, ReactNode, SetStateAction } from 'react';

const drawerBleeding = 56;

interface Props {
  window?: () => Window;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  children: ReactNode;
  height?: string;
}

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export default function MobileModel({ window, setOpen, open, children, height }: Props) {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // Container for mobile view
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Global
        styles={{
          '& .MuiModal-root.MuiDrawer-root': {
            zIndex: '9999 !important',
          },
          '& .MuiDrawer-root > .MuiPaper-root': {
            overflow: 'hidden',
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            height: height || '80vh',
            borderRadius: '12px 12px 0 0',
            overflow: 'hidden',
          },
        }}
      >
        <StyledBox>
          <Puller />
        </StyledBox>
        <StyledBox
          sx={{
            pt: 1,
            pb: 3,
            px: 2,
            mt: '20px',
            height: 'calc(80vh - 20px)',
            overflow: 'auto',
          }}
        >
          {children}
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}
