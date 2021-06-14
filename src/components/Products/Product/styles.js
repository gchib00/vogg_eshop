import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
      minHeight: 360,
      minWidth: 260,
      '&:hover': {
        boxShadow: '0px 5px 4px 1px rgb(0 0 0 / 40%)',
      },
      maxWidth: '100%',
      marginBottom: '20px',
    },
    media: {
      height: 200,
      maxWidth: '100%',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    buttons: {
      display: 'flex',
      alignItems: 'center',
    },
    description: {
      fontSize: 13
    },
    modal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    zoomedImage: {
      width: '800px',
      height: '800px',
      '@media(max-width: 1000px)': {
        width: '90vw',
        height: '90vh',
      },
      '@media(max-width: 490px)': {
        width: '90vw',
        height: '40vh',
      },
    },


  }));