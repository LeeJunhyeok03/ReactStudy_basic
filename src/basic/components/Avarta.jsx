import React from 'react';

export default function Avarta({newChk, img}) {
    return (
        <div className='Avarta'>
            {newChk && <span className="new">new</span>}
            <img 
                className='photo'
                src={img} 
                alt="avater" 
            />
        </div>
    );
}

