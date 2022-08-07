
import Link from 'next/link'
import { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { PaletteMode, useTheme } from '@mui/material'

interface Props {
    mode: PaletteMode
    onChange?: () => void
}

const HeaderComponent: FC<Props> = ({ mode, onChange }) => {
    const customTheme = useTheme()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{
                backgroundColor: customTheme.palette.background.paper,
                color: customTheme.palette.text.primary
            }} position="static">
                <Toolbar>
                    <Link href="/" passHref>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Eduardo Lira
                    </Typography>
                    <Switch checked={mode === 'dark'}
                        onChange={onChange}
                        color='primary' />

                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default HeaderComponent