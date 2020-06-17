import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    This is new Header
                </Typography>
                <AccountBoxIcon />
            </Toolbar>
        </AppBar>
    );
};

export default Header