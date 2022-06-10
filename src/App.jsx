import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
   {
      id: 1,
      author: {
         avatarUrl: 'https://github.com/BrunoDiLella.png',
         name: 'Bruno Gonçalves',
         role: 'Futuro Labs',
      },
      content: [
         {type: 'paragraph', content: 'Olá, meu nome é Bruno Gonçalves e eu sou um desenvolvedor Front-End.'},
         {type: 'paragraph', content: 'Eu estou estudando para ser um desenvolvedor Front-End.'},
         {type: 'Link', content: 'https://github.com/BrunoDiLella'},
      ],
      publishedAt: new Date('2022-05-3 20:00:00'),
   },
   {
      id: 2,
      author: {
         avatarUrl: "https://github.com/Erick-medeiros.png",
         name: 'Pedro Parque',
         role: 'opa',
      },
      content: [
         {type: 'paragraph', content: 'Olá, meu nome é Pedro e eu sou um desenvolvedor Front-End.'},
         {type: 'paragraph', content: 'Eu estou estudando para ser um desenvolvedor Front-End.'},
      ],
      publishedAt: new Date('2022-05-3 22:00:00'),
   }
]
export function App() {
   return (
    <div>
    <Header />
      
      <div className={styles.wrapper}>
         <Sidebar />
         <main>
            {posts.map(post => {
               return (
                  <Post
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
               )
            })}
         </main>
      </div>
    </div>
   )
}