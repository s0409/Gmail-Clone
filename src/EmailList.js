import { Checkbox, Icon, IconButton } from '@material-ui/core';
import RedoIcon from '@material-ui/icons/Redo';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React, { useEffect, useState } from 'react'
import "./EmailList.css";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import Section from './Section';
import PeopleIcon  from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {
    const [emails, setEmails] = useState([]);
    //connecting to the firestore database using useefect hook
    useEffect(() => {
        db.collection("emails")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
            setEmails(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>

                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected/>
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8"/>
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />

            </div> 
            <div className="emailList__list">
                {emails.map(({ id, data: { to, subject, message, timestamp 
                } }) => (
                    <EmailRow
                       id={id}
                       key={id}
                       title={to}
                       subject={subject}
                       description={message}
                       time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />    
                ))}
               <EmailRow
                   title="React"
                   subject="Hey fellow Programmer!!!!"
                   description="This is a test"
                   time="10pm"
                />
                <EmailRow
                   title="React"
                   subject="Programming is FUN!!!!"
                   description="This is a test"
                   time="10pm"
                />
                <EmailRow
                   title="React"
                   subject="Hey fellow Programmer!!!!"
                   description="This is a test"
                   time="10pm"
                />
                <EmailRow
                   title="React"
                   subject="Programming is FUN!!!!"
                   description="This is a test"
                   time="10pm"
                />          
                <EmailRow
                   title="React"
                   subject="Hey fellow Programmer!!!!"
                   description="This is a test"
                   time="10pm"
                />
                <EmailRow
                   title="React"
                   subject="Programming is FUN!!!!"
                   description="This is a test"
                   time="10pm"
                />  
                <EmailRow
                   title="React"
                   subject="Hey fellow Programmer!!!!"
                   description="This is a test"
                   time="10pm"
                />
                <EmailRow
                   title="React"
                   subject="Programming is FUN!!!!"
                   description="This is a test"
                   time="10pm"
                />          
                <EmailRow
                   title="React"
                   subject="Hey fellow Programmer!!!!"
                   description="This is a test"
                   time="10pm"
                />
                <EmailRow
                   title="React"
                   subject="Programming is FUN!!!!"
                   description="This is a test"
                   time="10pm"
                />          
                <EmailRow
                   title="React"
                   subject="Hey fellow Programmer!!!!"
                   description="This is a test"
                   time="10pm"
                />
                <EmailRow
                   title="React"
                   subject="Programming is FUN!!!!"
                   description="This is a test"
                   time="10pm"
                />          
                <EmailRow
                   title="React"
                   subject="Hey fellow Programmer!!!!"
                   description="This is a test"
                   time="10pm"
                />
                <EmailRow
                   title="React"
                   subject="Programming is FUN!!!!"
                   description="This is a test"
                   time="10pm"
                />          
                <EmailRow
                   title="React"
                   subject="Hey fellow Programmer!!!!"
                   description="This is a test"
                   time="10pm"
                />
                <EmailRow
                   title="React"
                   subject="Programming is FUN!!!!"
                   description="This is a test"
                   time="10pm"
                />                           
            </div> 
        </div>
    )
}

export default EmailList
