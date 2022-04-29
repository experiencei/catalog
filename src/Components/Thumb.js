import React, { Fragment } from 'react'

function Thumbs({ items, activeIndex , selectedCatalog }) {
    const onImageSelect = (event) => {
         selectedCatalog(event.target.id);
    }


    return (
        <Fragment>
            {
                items.map((catalog, idx) => (
                    <span   
                        id={idx} 
                        key={idx} 
                        onClick={(event) => onImageSelect(event)}
                        data-testid={'thumb-button-' + idx}
                    >
                        <span 
                            className={'inline-flex w-90 pa-4 image-thumb ' + 
                                (idx === activeIndex ? 'thumb-selected' : '')} 
                        >
                            <span 
                                className='mx-5 thumb' 
                                id={idx} 
                                style={{ backgroundImage: 'url('+ catalog.thumb + ')' }}
                            />
                        </span>
                    </span>
                ))
            }
        </Fragment>
    )
}

export default Thumbs

