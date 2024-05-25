import { Avatar, Badge, Box, Divider, IconButton, InputBase, Typography, styled } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const FlexBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4px 16px'
})

const Header = () => {
    return (
        <FlexBox component="header">
            <FlexBox sx={{ paddingLeft: '8px' }}>
                <IconButton aria-label='Toggle menu' size='large'>
                    <MenuIcon />
                </IconButton>
                <FlexBox role='presentation' sx={{ padding: 0 }}>
                    <PlayArrowIcon aria-hidden='true' sx={{ transform: 'scaleX(-1)' }} />
                    <Typography sx={{ fontWeight: 'bold', fontSize: '25px' }}>
                        NewTube
                    </Typography>
                </FlexBox>
            </FlexBox>
            <FlexBox sx={{ border: '1px solid black', width: '550px', borderRadius: '2em' }} fullWidth>
                <InputBase variant='outlined' placeholder='Search' sx={{ flexGrow: 1 }} />
                <Divider orientation="vertical" flexItem color="black" />
                <IconButton sx={{ width: '70px' }}>
                    <SearchIcon aria-label='Perform Search' />
                </IconButton>
            </FlexBox>
            <FlexBox sx={{ gap: 3 }}>
                <Badge badgeContent={4}>
                    <NotificationsIcon />
                </Badge>
                <Avatar alt='User Profile' />
            </FlexBox>
        </FlexBox>
    )
}

export default Header