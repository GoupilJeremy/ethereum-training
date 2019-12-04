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
    {ID: 1, title: "title1", author: "author1"},
    {ID: 2, title: "title2", author: "author2"},
    {ID: 3, title: "title3", author: "author3"}
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
                            ID: {item.ID}
                            title: {item.title}
                            ID: {item.author}
                        </div>
                    )
                })}
            </div>
        )
    }
}