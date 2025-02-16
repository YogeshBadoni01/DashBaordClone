"use client"
import { Alert, Button, Paper, Typography, styled } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

interface State extends SnackbarOrigin {
  open: boolean;
}
const page = () => {
    
    
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

      const data =[
          {
            bg:"linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96));",
            textbefore:" A simple primary alert with ",
        },
        {
            bg:"linear-gradient(195deg, rgb(116, 123, 138), rgb(73, 83, 97))",
            textbefore:" A simple secondary alert with ",
        },
        {
            bg:"linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
            textbefore:" A simple success alert with ",
        },
        {
            bg:"linear-gradient(195deg, rgb(239, 83, 80), rgb(229, 57, 53))",
            textbefore:" A simple error alert with ",
        },
        {
            bg:"linear-gradient(195deg, rgb(255, 167, 38), rgb(251, 140, 0))",
            textbefore:" A simple warning alert with ",
        },
        {
            bg:"linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
            textbefore:" A simple info alert with ",
        },
        {
            bg:"linear-gradient(195deg, rgb(235, 239, 244), rgb(206, 212, 218))",
            textbefore:" A simple light alert with ",
        },
        {
            bg:"linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
            textbefore:" A simple dark alert with ",
        },

    ]

    const notif=[
        {
            bg:"linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71));",
            textbefore:" success ",
        },
        {
            bg:"linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));",
            textbefore:" info ",
        },
        {
            bg:"linear-gradient(195deg, rgb(255, 167, 38), rgb(251, 140, 0));",
            textbefore:" warning ",
        },
        {
            bg:"linear-gradient(195deg, rgb(239, 83, 80), rgb(229, 57, 53));",
            textbefore:" error ",
        },
    ]
    
    
      const  [Notification,setNotification]=useState(notif);
    const removeNotif=(item:any)=>{
        // setNotification(Notification.slice(Notification.indexOf(e.target.)))
        const textbefore=item.target.getAttribute("textbefore");
        setNotification(i=>i.filter(item => item.bg !== textbefore 
            ) 
            
            )
        {console.error(Notification)}
    };

  const handleAlertClose = (id: number) => {
    setOpenAlerts((prevOpenAlerts) => {
      const newOpenAlerts = [...prevOpenAlerts];
      newOpenAlerts[id] = false;
      return newOpenAlerts;
    });
  };

  const handleSnackbarClose = (id: number) => {
    setOpenSnackbar((prevOpenSnackbar) => {
      const newOpenSnackbar = [...prevOpenSnackbar];
      newOpenSnackbar[id] = false;
      return newOpenSnackbar;
    });
  };

    //   const { enqueueSnackbar } = useSnackbar();

    //   const handleClick = () => {
    //     enqueueSnackbar('I love snacks.');
    //   };
    
    //   const handleClickVariant = (variant: VariantType) => () => {
    //     // variant could be success, error, warning, info, or default
    //     enqueueSnackbar('This is a success message!', { variant });
    //   };

    // const [state, setState] = React.useState<State>({
    //     open: false,
    //     vertical: 'top',
    //     horizontal: 'center',
    //   });
    //   const { vertical, horizontal, open } = state;
    
    //   const handleClick = (newState: SnackbarOrigin) => () => {
    //     setState({ ...newState, open: true });
    //   };
    
    //   const handleClose = () => {
    //     setState({ ...state, open: false });
    //   };

    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
      });
    
      const { vertical, horizontal, open } = state;
    
      const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ ...newState, open: true });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };
  return (
    <>
    <Paper sx={{backgroundColor:"background.default",width:"auto",boxShadow:"none",backgroundImage:"none"}}>
<DrawerHeader sx={{
          '@media (max-width: 768px)': {
            height:"130px"
          },
        }}/>
                    <div className="mt-12 mb-6 bg-transparent text-[#344767] leading-[1.625] tracking-[0.0094rem] text-[20px]  font-normal">
                        <div className="lg:flex block  justify-center -mt-6 -ml-6 ">
                            <div className="flex flex-col basis-2/3">

                                <div className="pt-6 pl-6 flex  flex-col ">
                                <Paper sx={{borderRadius:"12px",background:"background.custom2"}}>

                                    <div className="  flex  rounded-xl flex-col myshadow">
                                        <div className="p-4 block">
                                            <h5 className='text-[20px] font-bold tracking-normal leading-[1.375] block'>Alerts</h5>
                                        </div>
                                        <div className="p-4">
                                            {/* <div className="p-4 flex justify-between items-center mb-4 text-white ">
                                                <div className="font-semibold">
                                                    <p className='text-[16px] font-light leading-[1.6] '>
                                                        A Simple alert with 
                                                        <Link href="./" className="font-semibold cursor-pointer">an Example link</Link>
                                                        . Give it a click if you like.
                                                    </p>
                                                </div>
                                            </div> */}

                                            {/* <Alert onClose={} severity="success" sx={{
                                                background:"linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96));",color:'white',fontSize:"16px"
                                            }}>
                                            This success Alert has no icon.
                                            </Alert> */}
                                            {data.map((item, index) => (
                                                <Alert
                                                // onClose={() => handleAlertClose(index)}
                                                onClose={removeNotif}

                                                severity="success"
                                                sx={{
                                                    background: `${item.bg}`,
                                                    color: 'white',
                                                    fontSize: '16px',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '16px',
                                                    padding: '10px 16px',
                                                }}
                                                key={index}
                                                icon={false}
                                                >
                                                {item.textbefore}
                                                <Link href="./" className="font-semibold cursor-pointer">
                                                    an example link
                                                </Link>
                                                . Give it a click if you like.
                                                <IconButton
                                                    aria-label="close"
                                                    color="inherit"
                                                    size="small"
                                                    // onClick={() => handleAlertClose(index)}
                                                    sx={{marginLeft:"40px",fontWeight:700}}
                                                    className="ml-10 text-white"
                                                    onClick={removeNotif}
                                                >
                                                    {/* <CloseIcon fontSize="inherit" />
                                                    - */}
                                                </IconButton>
                                                </Alert>
                                            ))}
                                        </div>
                                    </div>
                                </Paper>
                                </div>


                                <div className="pt-6 pl-6 flex flex-col ">
                                <Paper sx={{borderRadius:"12px"}}>
                                    <div className="  flex  rounded-xl flex-col">
                                        <div className="p-4 block">
                                            <Typography variant='h5' sx={{fontSize:"20px",color:"text.primary"}}  className='text-[20px] font-bold tracking-normal leading-[1.375] block'>Notifications</Typography>
                                            <Typography paragraph sx={{color:"text.secondary",marginBottom:"0"}} className=' leading-[1.5] tracking-[0.028] font-normal text-[14px]'>Notifications on this page use Toasts from Bootstrap. Read more details here.</Typography>
                                        </div>
                                        <div className="flex ">
                                            <div className="w-full grid md:grid-cols-4 lg:grid hmd:grid-cols-2 grid-cols-1 justify-center items-center -mt-6 -ml-6 p-4">
                                            {/* <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
                                                <Snackbar
                                                open={()=>openSnackbar}
                                                autoHideDuration={6000}
                                                onClose={handleSnackbarClose}
                                                message="Note archived" 
                                                // action={action}
                                                /> */}

                                                {/* 
                                                <Button
                                                        onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}
                                                        sx={{ color: '#fff', backgroundImage: `${item.bg}` }}
                                                        className="py-2.5 px-6 bg-[${item.bg}] rounded-xl flex w-full "
                                                    >
                                                        {`${item.textbefore} Notification`}
                                                    </Button>
                                                
                                                */}
                                            {notif.map((item, index) => (
                                                    <div className="pt-6 pl-6 myshadow" key={index}>
                                                <Button
                                                        onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}
                                                        style={{ color: '#fff', backgroundImage: item.bg }}
                                                        className="py-2.5 px-6 rounded-xl w-full text-[12px]"
                                                        >
                                                        {`${item.textbefore} Notification`}
                                                        </Button>


                                                    <Snackbar
                                                        anchorOrigin={{ vertical, horizontal }}
                                                        open={open}
                                                        onClose={handleClose}
                                                        message={`${item.textbefore} notification`}
                                                        key={vertical + horizontal}
                                                        sx={{ background: 'green' }}
                                                    />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                    </div>
                                </Paper>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </Paper>
        
    </>
  )
}

export default page