import * as React from 'react';

export interface IBook {
    ID: number;
    title: string;
    author: string;
}

export interface IBooksState {
    data: IBook[]
}

export interface IBookProps {
    count: number;
}

const booksData: IBook[] = [
    { ID: 1, title: "Lockheed Papers", author: "David Bolton"},
    { ID: 2, title: "Arthshastra", author: "Chanakya"},
    { ID: 1, title: "spitfire Singh", author: "Mike Edwards"}
];

export class Books extends React.Component<IBookProps, IBooksState> {
    public state: IBooksState = {
        data: booksData
    };

    public render() {
        return (
            <div>
                {this.state.data.map((item: IBook) => {
                    return (
                        <div key={item.ID} className="App-list-box">
                            ID : {item.ID} <br />
                            Title : {item.title} <br />
                            Author : {item.author} <br />
                        </div>
                    )

                })}
            </div>
        )
    }
}