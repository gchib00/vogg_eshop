import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
      height: 400,
      width: 320,
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
    cartActions: {
      justifyContent: 'space-between',
    },
    buttons: {
      display: 'flex',
      alignItems: 'center',
    },
    description: {
      fontSize: 13
    },
    shoppingcartBtn: {
      position: 'relative',
      left: 260,
      color: 'green',
    },

    modal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    zoomedImage: {
      width: '80vw',
      height: '66vh',
    },


  }));