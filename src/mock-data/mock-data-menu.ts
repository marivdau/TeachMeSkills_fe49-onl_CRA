interface IMenuItem {
  id: number;
  title: string;
}

export const menuMockArray = [
  { id: '1', title: 'Home', link: '/posts' },
  { id: '2', title: 'Add post', link: '/posts/add-post' },
  { id: '3', title: 'All posts', link: '/posts/all' },
]
