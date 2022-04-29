import React from 'react';

function Error({valueError , real}) {
return <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{valueError ? `Sorry, ${valueError}'s validity has Expired!` : real}</div>;
}

export default Error; 