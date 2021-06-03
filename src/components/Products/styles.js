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
    alignItems: 'centrer',
  },
  genderFilter: {
    border: '2px solid black'
  }
}));