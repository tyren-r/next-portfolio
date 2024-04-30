'use client'
import { Tooltip } from 'react-tooltip';
import Image from 'next/image';

const UserMarker = (props) => (
    
    <a
        target="none"
        rel="noreferrer"
        data-tooltip-id="user"
        data-tooltip-content="Your Location"
              
        >
            <Tooltip
            id="user"
            style={{padding:'6px',fontSize:'11px'}}
             />
        <Image
            alt="your location"
            height={20}
            width={20}
            src="/user.png"
        />
    </a>
)

export default UserMarker;