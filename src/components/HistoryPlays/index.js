import React from 'react';
import PlayHistory from '../../objects/PlayHistory';
import './styles.css';

const HistoryPlays = ({content}) => (
 <div className="history-plays">
   <PlayHistory content={content}/>
   <PlayHistory content={content}/>
 </div> 
);

export default HistoryPlays;