import React, { useState, useRef } from 'react'
import './contact.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { IoIosSend } from "react-icons/io";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import axios from 'axios'



const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
  }));

const Contact = _ => {
    const firstname = useRef()
    const lastname = useRef()
    const email = useRef()
    const message = useRef()
    const subject = useRef()

    const [contactState, setcontactState] = useState({})

    contactState.handlesend = _ => {
        if (firstname.current.value === '' || lastname.current.value === '' || email.current.value === '' || message.current.value === '') {
            alert('please fill out form')
        } else {
            document.getElementById('replies').style.visibility="visible"
            let body = {
                from: email.current.value,
                subject: subject.current.value,
                message: `Email from ${email.current.value}.
                ${firstname.current.value} ${lastname.current.value}, 
                ${message.current.value}`
            }
            axios.post('/send', body)
            .then(data => {
                console.log(data)
                firstname.current.value = ''
                lastname.current.value = ''
                email.current.value = ''
                subject.current.value = ''
                message.current.value = ''
            })
            .catch(e => console.error(e))
            setTimeout(_ =>{
                document.getElementById('replies').style.visibility="hidden"
            }, 4500)  
        }
    }

    const classes = useStyles();
    return (
        <div id="contact">
            <div className="container">
                <h2 className="subtitle">Get In Touch</h2>
                <div className="logos">
                    <a href="https://github.com/anniekpham"><FaGithub className="icon1"/></a>
                    <a href="https://www.linkedin.com/in/annie-pham-15a789147/"><FaLinkedin className="icon2"/></a>
                    <a href="https://www.facebook.com/annie.k.pham?ref=bookmarks"><FaFacebookSquare className="icon3"/></a>
                </div>
                <form className={classes.container} noValidate autoComplete="off" id="contactcontainer">
                    <div>
                        <TextField
                            required
                            id="standard-name"
                            label="First Name"
                            style={{ width: "25vw", marginRight: "6vw" }}
                            className={classes.textField}
                            margin="normal"
                            inputRef={firstname}
                            />
                        <TextField
                            required
                            id="standard-name"
                            label="Last Name"
                            style={{ width: "25vw"  }}
                            className={classes.textField}
                            margin="normal"
                            inputRef={lastname}
                            />
                    </div>
                    <div>
                        <TextField
                            className="email"
                            required
                            id="standard-email"
                            label="Email"
                            type="email"
                            style={{ width: "56vw", marginTop:"2%" }}
                            className={classes.textField}
                            autoComplete="email"
                            margin="normal"
                            inputRef={email}
                            />
                    </div>
                    <div>
                        <TextField
                            className="subject"
                            id="standard-text"
                            label="Subject"
                            type="text"
                            style={{ width: "56vw", marginTop:"2%" }}
                            className={classes.textField}
                            margin="normal"
                            inputRef={subject}
                            />
                    </div>
                    <div>
                        <TextField
                            className="message"
                            required
                            multiline={true}
                            id="standard-full-width"
                            label="Message"
                            style={{ margin: 8, width: "56vw", marginTop:"2%" }}
                            row = "2"
                            margin="normal"
                            inputRef={message}
                            InputLabelProps={{
                            }}
                        />
                    </div>
                </form>
                <AwesomeButton
                    size="medium"
                    type="primary"
                    onPress={contactState.handlesend}
                    >
                    <IoIosSend id="sendicon"/>
                </AwesomeButton>
                <p className="reply" id="replies">Thank you for reaching out, I will get back to you ASAP!</p>
            </div>
        </div>
    )
}

export default Contact