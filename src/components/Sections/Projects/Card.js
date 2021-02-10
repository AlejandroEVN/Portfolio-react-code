import React from 'react';

const Card = ({cards}) => {

    return Object.keys(cards).map(card => 
        <div key={cards[card].title} className="card">
            <div className="card__content">

                <div className={`card__front image__${cards[card].image}`}>
                    <h3 className="card__title">{cards[card].title}</h3>
                </div>

                <div className="card__back">
                    <div className="card__body">
                        <div className="card__body-content">
                            <h4>{cards[card].title}</h4>
                            <svg className="svg__separator" viewBox="0 0 24 1">
                                <path d="M -125, 0 L 125, 0" />
                            </svg>
                            <p className="text-justify">{cards[card].description}</p>
                        </div>
                        <a href={`${cards[card].link}`} 
                        target="_blank" title="Code on GitHub"
                        rel="noreferrer"
                        className="card__body-link">
                            <svg className="svg__brackets" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        )
};

export default Card;