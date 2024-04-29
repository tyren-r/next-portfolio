'use client'
import { Tooltip } from 'react-tooltip'

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
        <img
        alt={props.name}
            height={20}
            src="/location-pin.png"
        />
    </a>
)

export default HemaMarker;