import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: {
    minHeight: 100
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  genderfilterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderFilter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    '@media(max-width: 340px)': {
      width: '300px',
    },
    borderSize: 'border-box',
  },
  option1: {
    textAlign: 'center',
    width: 80,
    padding: 12,

    border: '2px #828282 solid',
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    boxShadow: '0px 1px 0px 0px #d1d1d1',

    '&:hover': {
      backgroundColor: '#828282',
      color: 'white',
      transition: '250ms',
    },
  },
  option2: {
    textAlign: 'center',
    width: 80,
    padding: 12,

    borderTop: '2px #828282 solid',
    borderBottom: '2px #828282 solid',
    boxShadow: '0px 1px 0px 0px #d1d1d1',

    '&:hover': {
      backgroundColor: '#828282',
      color: 'white',
      transition: '250ms',
    },
  },
  option3: {
    textAlign: 'center',
    width: 80,
    padding: 12,

    border: '2px #828282 solid',
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    boxShadow: '0px 1px 0px 0px #d1d1d1',

    '&:hover': {
      backgroundColor: '#828282',
      color: 'white',
      transition: '250ms',
    },
  }
}));