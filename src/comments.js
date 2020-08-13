import React from 'react';
import {Image, Form, Header, Comment, Button} from 'semantic-ui-react'

import hm from "./hm.jpg"

class Comments extends React.Component{
  render(){
    return(<Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>

        <Comment>
          <Comment.Avatar src={hm} />
          <Comment.Content>
            <Comment.Author as='a'>Sojin</Comment.Author>
            <Comment.Metadata>
              <div>Today at 7:30PM</div>
            </Comment.Metadata>
            <Comment.Text>오~</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>)
   }
}
   export default Comments;
