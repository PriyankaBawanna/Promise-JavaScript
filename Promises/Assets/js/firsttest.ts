const obj: Posts = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};
interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const comments: IComment[] = [];
interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
