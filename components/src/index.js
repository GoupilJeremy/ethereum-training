import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./AppovalCard";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
           <CommentDetail
               author="Sam"
               timeAgo="Today at 4:45PM"
               content="Nice blog post"
               avatar={faker.image.avatar()}
           />
            </ApprovalCard>
            <ApprovalCard>
           <CommentDetail
               author="john"
               timeAgo="Today at 4:45PM"
               content="Nice blog post"
               avatar={faker.image.avatar()}
           />
            </ApprovalCard>
            <ApprovalCard>
           <CommentDetail
               author="Alex"
               timeAgo="Today at 4:45PM"
               content="Nice blog post"
               avatar={faker.image.avatar()}
           />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));