import React from 'react'
import { range, filter, map } from 'rxjs';
const ReactRXJSLibrary = () => {

    range(1, 200)
        .pipe(
            filter(x => x % 2 === 1),
            map(x => x + x)
        )
        .subscribe(x => console.log(x));
    return (
        <div className='text-center my-3'>
            ReactRXJSLibrary
        </div>
    )
}

export default ReactRXJSLibrary