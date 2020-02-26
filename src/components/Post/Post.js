import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Avatar, Button, IconButton,Card, CardContent, CardMedia, CardActions, CardHeader, Typography} from "@material-ui/core";  
import CommentList from "../CommentList";
import Comment from "../Comment"; 
import { green } from '@material-ui/core/colors';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlined from '@material-ui/icons/ChatBubbleOutlineOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    marginBottom: 10,
    marginTop: 10,
  },
  // margin: {
  //   margin: theme.spacing(1)
  // },
  // extendedIcon: {
  //   marginRight: theme.spacing(1)
  // },
  avatar: {
    backgroundColor: green['A400'],
  },
}));

function Post(props) {   

  const renderImage = () => {
    if(props.post.picture=='pic1'){
      return (<img
        style={{ width: "500px" }}
        src={require("../../samplefiles/pic1.jpg")}
      />)
    } else {
    return <div> <img  style={{ width: "500px" }} src={`data:image/jpeg;base64,${props.post.picture}`} /></div>
    }
  }
 

  const [comments, setComments] = useState([]);

  const renderComments = () => {
    return comments.map((comment, index) => {
      return <Comment comment={comment} key={index}></Comment>;
    });
  };

  const addComment = () => {
    var message = document.getElementById("currentComment").value;
    if (message == "")
      return;
    setComments([{message: message},...comments]);
    //console.log(comments);
  }

  // const handleCommentDisplay = e =>{
  //   props.setOpenNewPostModal(true);

  // };

  const followAction = () =>{

    //If; logged-in user has already followed the another user and
    // is trying to follow them again, simply display that "You have already followed 'Username!'"
    //Insert code here
    if(!true){
      console.log("Entered the if")
    }
    //Else if; Logged-in user cannot follow himself, simply display that "You cannot follow yourself!'"
    //Insert code here
    else if (false){
      console.log("Entered the else if")
    }
    //Else; Logged-in user is trying to follow a user that is not themselves nor that they are
    //already follwing, simply proceed and display a success message "You have succesfully followed 'Username'" 
    else{
      console.log("Entered the else")

    }
  }

  const classes = useStyles();
   
  return (
    <div className="App">
      <Card className={classes.card}>
        
        <CardHeader
         avatar={
          <Avatar className={classes.avatar}>
            A
          </Avatar>
        }

        action = {
          <IconButton>
          <PersonAddIcon onClick = {followAction}/>
          </IconButton>
        }
        /*
        <Button>
          <PersonAddIcon/>
        </Button>
        */

        title="Username"
        subheader="Date of the post"

        style={{textAlign:"left"}}
        />
        <CardContent style={{textAlign:"left"}}>
          <Typography>
            Description of the post
            {/* <div className="PostText">{props.post.text}</div> */}
          </Typography>
        </CardContent>

        <CardMedia>    
        {renderImage()}
        </CardMedia>

        <CardActions disableSpacing>
          <Button>
            <ThumbUpOutlinedIcon/>
          </Button>

          <Button>

            <ChatBubbleOutlineOutlined/>

            {/* <ChatBubbleOutlineOutlined onClick={handleCommentDisplay}/> */}
          </Button>


        </CardActions>
     
      </Card>
      {/* <div style={postStyle}>
        <div className="Post">
          <div className="Header">
            <span className="UserPic">O</span>
            &nbsp;&nbsp;
            <span className="UserName">{props.post.userName}</span>
          </div>
          <div className="PostContent">
            <div className="PostPicture" style={pictureStyle}>
              
              {renderImage()}
              
            </div>
            <div className="PostText">{props.post.text}</div>
          </div>
          <div className="PostFooter">
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.margin}
            >
              LIKE
            </Button> 
          </div>
          <div className="CommentSection">
            <form>
              <input type="text" placeholder="Leave a Comment ..." id = "currentComment"></input>
              <Button
               variant="contained"
               size="small"
               color="primary"
               onClick={addComment}
              >
                Comment
              </Button>
              <CommentList renderComments={renderComments} id = "commentlist"/>
            </form>
          </div> 
        </div>
      </div> */}
    </div>
  );
}
const postStyle = {
  border: "1px solid gray",
  margin: "10px 0px 5px 0px",
  background: "#F0F8FF",
  boxShadow: "1px 1px 5px grey",
  width: "500px"
};

const pictureStyle = {
  width: "100%"
};

const listStyle = {
  listStyleType: "none",
  textAlign: "left"
}

export default Post;
