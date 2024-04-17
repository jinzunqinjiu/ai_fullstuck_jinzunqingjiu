import React from 'react';
import { useStore } from '../../store'
import { observer } from 'mobx-react-lite'
const index = () => {
    const { movieStore } = useStore()
    return (
        <div>
            <ul>
                {
                    movieStore.movieList.map(item => (<li key={item.id}>{item.nm}--{item.star}</li>))
                }
            </ul>
        </div>
    );
};

export default observer(index);