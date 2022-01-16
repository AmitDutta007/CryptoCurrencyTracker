import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'


const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: 'gold',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
}))

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fff"
        },
        type: 'dark'
    }
})
const Header = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const { currency, setCurrency } = CryptoState()
    console.log(currency)

    
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography onClick={() => navigate('/')} className={classes.title}>Crypto-checker</Typography>
                        <Select

                            variant='outlined'
                            style={{
                                marginLeft: 'auto',
                                width: '10%',
                                height: '100%'
                            }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={'INR'}>INR</MenuItem>
                            <MenuItem value={'USD'}>USD</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header
