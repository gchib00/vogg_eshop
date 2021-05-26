import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
      height: 300,
      width: 320,
    },
    media: {
      height: 200,
      width: 320,
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
  }));