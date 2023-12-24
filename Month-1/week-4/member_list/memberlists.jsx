import React from 'react';
import './memberlist.css'


const GroupMembersList = ({ members }) => {
  return (
    
    <div className="group-members-container">
    
    
    <ul className="group-members-list">
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
     
    
     
  );
};

export default GroupMembersList;