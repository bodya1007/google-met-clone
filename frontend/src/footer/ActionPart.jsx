import React, { useState, useEffect, useRef } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import PresentToAllSharpIcon from '@mui/icons-material/PresentToAllSharp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';
import Badge from '@mui/material/Badge';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';
import PhoneForwardedRoundedIcon from '@mui/icons-material/PhoneForwardedRounded';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MicOffRoundedIcon from '@mui/icons-material/MicOffRounded';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import './footer.style.css'

function ActionPart() {
    const menuRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [micState, setMicState] = useState(false)
    const [camState, setCamState] = useState(false)
    const [micTooltip, setMicTooltip] = useState(false)
    const [camTooltip, setCamTooltip] = useState(false)
    const [raiseHandTooltip, setRaiseHandTooltip] = useState(false)
    const [reactionTooltip, setReactionTooltip] = useState(false)
    const [screenTooltip, setScreenTooltip] = useState(false)
    const [optionTooltip, setOptionTooltip] = useState(false)
    const [endCallTooltip, setEndCallTooltip] = useState(false)

    const handleMicShow = () => setMicTooltip(true);
    const handleMicHide = () => setMicTooltip(false);
    const handleCamShow = () => setCamTooltip(true);
    const handleCamHide = () => setCamTooltip(false);
    const handleRaiseHandShow = () => setRaiseHandTooltip(true);
    const handleRaiseHandHide = () => setRaiseHandTooltip(false);
    const handleReactionShow = () => setReactionTooltip(true);
    const handleReactionHide = () => setReactionTooltip(false);
    const handleScreenShow = () => setScreenTooltip(true);
    const handleScreenHide = () => setScreenTooltip(false);
    const handleOptionShow = () => setOptionTooltip(true);
    const handleOptionHide = () => setOptionTooltip(false);
    const handleEndCallShow = () => setEndCallTooltip(true);
    const handleEndCallHide = () => setEndCallTooltip(false);

    const styles = {
        circle: {
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            backgroundColor: 'rgb(60,64,67)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '6px',
            cursor: 'pointer'
        },
        circleOff: {
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            backgroundColor: 'rgb(234,67,53)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '6px',
            cursor: 'pointer'
        },
        oval: {
            width: '3.5rem',
            height: '2.5rem',
            borderRadius: '41%',
            backgroundColor: 'rgb(234,67,53)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '6px',
            cursor: 'pointer'
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const changeStateMic = () => {
        setMicState(!micState)
    }
    const changeCamState = () => {
        setCamState(!camState)
    }
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCheck = (event) => {
        if (anchorEl === null) {
            handleClick(event)
        } else {
            handleClose()
        }
    }
    const handleClickOutside = event => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setAnchorEl(null);
        }
    };
    const showText = event => {
        alert(event.target.textContent)
        handleClose()
    }

    return (
        <div className='actionalPart'>
            <Tooltip
                title="Увімкнути мікрофон (ctrl + d)"
                placement="top"
                open={micTooltip}
            >
                {micState ? <Badge
                    onClick={changeStateMic}
                    overlap="circular"
                    badgeContent=" "
                    sx={styles.circle}
                    onMouseEnter={handleMicShow}
                    onMouseLeave={handleMicHide}
                >
                    <MicIcon />
                </Badge> : <Badge
                    onClick={changeStateMic}
                    overlap="circular"
                    badgeContent=" "
                    sx={styles.circleOff}
                    onMouseEnter={handleMicShow}
                    onMouseLeave={handleMicHide}
                >
                    <MicOffRoundedIcon />
                </Badge>}
            </Tooltip>
            <Tooltip
                title="Увімкнути камеру (ctrl + e)"
                placement="top"
                open={camTooltip}
            >
                {camState ? <Badge
                    onClick={changeCamState}
                    overlap="circular"
                    badgeContent=" "
                    sx={styles.circle}
                    onMouseEnter={handleCamShow}
                    onMouseLeave={handleCamHide}
                >
                    <VideocamOutlinedIcon />
                </Badge> : <Badge
                    onClick={changeCamState}
                    overlap="circular"
                    badgeContent=" "
                    sx={styles.circleOff}
                    onMouseEnter={handleCamShow}
                    onMouseLeave={handleCamHide}
                >
                    <VideocamOffOutlinedIcon />
                </Badge>}
            </Tooltip>
            <Tooltip
                title="Підняти руку (ctrl + alt + h)"
                placement="top"
                open={raiseHandTooltip}
            >
                <Badge
                    overlap="circular"
                    badgeContent=" "
                    sx={styles.circle}
                    onMouseEnter={handleRaiseHandShow}
                    onMouseLeave={handleRaiseHandHide}
                >
                    <PanToolOutlinedIcon />
                </Badge>
            </Tooltip>
            <Tooltip
                title="Надіслати реакцію"
                placement="top"
                open={reactionTooltip}
            >
                <Badge
                    overlap="circular"
                    badgeContent=" "
                    sx={styles.circle}
                    onMouseEnter={handleReactionShow}
                    onMouseLeave={handleReactionHide}
                >
                    <EmojiEmotionsOutlinedIcon />
                </Badge>
            </Tooltip>
            <Tooltip
                title="Розпочати презентацію зараз"
                placement="top"
                open={screenTooltip}
            >
                <Badge
                    overlap="circular"
                    badgeContent=" "
                    sx={styles.circle}
                    onMouseEnter={handleScreenShow}
                    onMouseLeave={handleScreenHide}
                >
                    <PresentToAllSharpIcon />
                </Badge>
            </Tooltip>
            <Tooltip
                title="Інші опції"
                placement="top"
                open={optionTooltip}
            >
                <Badge
                    overlap="circular"
                    badgeContent=" "
                    sx={styles.circle}
                    onMouseEnter={handleOptionShow}
                    onMouseLeave={handleOptionHide}
                >
                    <MoreVertIcon onClick={handleCheck} ref={menuRef} />
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        sx={{ width: '50%' }}
                        className='menu'
                    >
                        <MenuItem className='menu-item' onClick={showText}><BorderColorOutlinedIcon sx={{ opacity: '70%' }} /> <span>Дошка для конференцій</span> </MenuItem>
                        <MenuItem className='menu-item' onClick={showText}><RadioButtonCheckedOutlinedIcon sx={{ opacity: '70%' }} /> <span>Записувати зустріч</span></MenuItem>
                        <Divider />
                        <MenuItem className='menu-item' onClick={showText}><DashboardOutlinedIcon sx={{ opacity: '70%' }} /> <span>Змінити макет</span></MenuItem>
                        <MenuItem className='menu-item' onClick={showText}><FullscreenOutlinedIcon sx={{ opacity: '70%' }} /> <span>Повноекраний режим</span></MenuItem>
                        <MenuItem className='menu-item' onClick={showText}><AutoAwesomeRoundedIcon sx={{ opacity: '70%' }} /> <span>Застосувати візуальні ефекти</span></MenuItem>
                        <MenuItem className='menu-item' onClick={showText}><ClosedCaptionOffOutlinedIcon sx={{ opacity: '70%' }} /> <span>Увімкнути субтитри</span></MenuItem>
                        <MenuItem className='menu-item' onClick={showText}><PhoneForwardedRoundedIcon sx={{ opacity: '70%' }} /> <span>Використовувати телефон для передачі звуку</span></MenuItem>
                        <Divider />
                        <MenuItem className='menu-item' onClick={showText} ><FeedbackOutlinedIcon sx={{ opacity: '70%' }} /> <span>Повідомити про проблему</span></MenuItem>
                        <MenuItem className='menu-item' onClick={showText}><ReportGmailerrorredOutlinedIcon sx={{ opacity: '70%' }} /> <span>Повідомити про порушення</span></MenuItem>
                        <MenuItem className='menu-item' onClick={showText}><TroubleshootOutlinedIcon sx={{ opacity: '70%' }} /> <span>Вирішення проблеми і довідка</span></MenuItem>
                        <MenuItem className='menu-item' onClick={showText}><SettingsOutlinedIcon sx={{ opacity: '70%' }} /> <span>Налаштування</span></MenuItem>
                    </Menu>
                </Badge>
            </Tooltip>
            <Tooltip
                title="Завершити дзвінок"
                placement="top"
                open={endCallTooltip}
            >
                <Badge
                    overlap="circular"
                    badgeContent=" "
                    sx={styles.oval}
                    onMouseEnter={handleEndCallShow}
                    onMouseLeave={handleEndCallHide}
                >
                    <CallEndIcon />
                </Badge>
            </Tooltip>
        </div>
    )
}

export default ActionPart