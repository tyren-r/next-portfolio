'use client'
import { Tooltip } from 'react-tooltip'
import Image from 'next/image';

const HemaMarker = (props) => (
    
    <a
        target="_blank"
        rel="noreferrer"
        href={props.url}
        data-tooltip-id="club"
        data-tooltip-content={props.name}
              
        >
            <Tooltip
            multiline={true}
            id="club"
            style={{padding:'6px',fontSize:'11px'}}
             />
        <Image
        alt={props.name}
            height={20}
            width={20}
            src="/location-pin.png"
        />
    </a>
)

export default HemaMarker;