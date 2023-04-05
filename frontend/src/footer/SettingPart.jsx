import React, { useState } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import './footer.style.css'

function SettingPart() {
  const [showDetails, setShowDetails] = useState(false);
  const [showEveryone, setShowEveryone] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showAction, setShowAction] = useState(false);

  const handleDetailsShow = () => setShowDetails(true);
  const handleDetailsHide = () => setShowDetails(false);
  const handleEveryoneShow = () => setShowEveryone(true);
  const handleEveryoneHide = () => setShowEveryone(false);
  const handleChatShow = () => setShowChat(true);
  const handleChatHide = () => setShowChat(false);
  const handleActionShow = () => setShowAction(true);
  const handleActionHide = () => setShowAction(false);

  const style = { marginRight: '1.45rem', fontSize: '1.5rem', fontWeight: 'bold', cursor:'pointer' }

  return (
    <div className='settingPart'>
      <Tooltip
        title="Деталі зустрічі"
        placement="top"
        open={showDetails}
      >
        <InfoOutlinedIcon
          onMouseEnter={handleDetailsShow}
          onMouseLeave={handleDetailsHide}
          sx={style}
        />
      </Tooltip>
      <Tooltip
        title="Показати всіх"
        placement="top"
        open={showEveryone}
      >
        <Badge
          badgeContent={12}
          sx={style}
        >
          <PeopleAltOutlinedIcon
            onMouseEnter={handleEveryoneShow}
            onMouseLeave={handleEveryoneHide}
          />
        </Badge>
      </Tooltip>
      <Tooltip
        title="Почати чат з усіма"
        placement="top"
        open={showChat}
      >
        <ChatOutlinedIcon
          onMouseEnter={handleChatShow}
          onMouseLeave={handleChatHide}
          sx={style}
        />
      </Tooltip>
      <Tooltip
        title="Дії"
        placement="top"
        open={showAction}
      >
        <CategoryOutlinedIcon
          onMouseEnter={handleActionShow}
          onMouseLeave={handleActionHide}
          sx={style}
        />
      </Tooltip>
    </div >
  )
}

export default SettingPart