import React from 'react';

// style
import './ShareArticle.css';

// 3rd party components
import { IconButton } from '@mui/material';

// material-icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';

const ShareArticle = () => {
    return (
        <div className='shareArticle'>
                
            <p>Share article</p>

            <div className='shareArticle_icons'>
                <IconButton><LinkedInIcon /></IconButton>
                
                <IconButton><FacebookIcon /></IconButton>
                
                <IconButton><TwitterIcon /></IconButton>
                
                <IconButton><LinkIcon /></IconButton>
            </div>
            
        </div>
    )
}

export default ShareArticle
